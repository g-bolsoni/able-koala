import nodemailer  from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.MAIL_ADDRESS;
const emailPass = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: "mail.ablekoala.com.au",
    port: 465,
    auth: {
        user: email,
        pass: emailPass
    }
});


// eslint-disable-next-line import/no-anonymous-default-export  
export default async (req: NextApiRequest, res:NextApiResponse) => {

   
    
    if(req.body.origin !== "resume"){
        const response = await sendContactUs(req.body);
        let responseStatus = response.response.split(' ')[0];
        let responseMessage = response.response.split(' ')[1];
        
        if(responseStatus && responseMessage){
            res.status(responseStatus).send(responseMessage)
        }else{
            res.status(500).send("Erro ao enviar o e-mail");
        }
        
    }

    if(req.body.origin !== "resume"){  
        const response = await contactUs(req.body); 
        let responseStatus = response.response.split(' ')[0];
        let responseMessage = response.response.split(' ')[1];
        
        if(responseStatus && responseMessage){
             res.status(responseStatus).send(responseMessage)
        }else{
             res.status(500).send("Erro ao enviar o e-mail");
        }
    }

    if(req.body.origin == "resume"){ 
        // Send resume 
        const {clientMail, name, cellphone } = req.body

        if(!clientMail || !name || !cellphone ) {
            res.status(403).send('Erro com os campos do E-mail');
            return;
        }
       const response = await getJobMail(req.body);

       let responseStatus = response.response.split(' ')[0];
       let responseMessage = response.response.split(' ')[1];
       
       if(responseStatus && responseMessage){
            res.status(responseStatus).send(responseMessage)
       }else{
            res.status(500).send("Erro ao enviar o e-mail");
       }
    
    }
}

async function getJobMail({name, clientMail, cellphone, fileUrl}){
    
    let text = '';

    if(fileUrl.length){
        text = `
            ${name} sent his resume.
            Contact Number: ${cellphone}.
            Link to resume.
            ${fileUrl}
        `;
    }

    let subject = `${name} sent a new e-mail`;
    const from = name && clientMail ? `${name}<${clientMail}>` : `${name || clientMail}`;


    try {
        const mailerRes = await sendEmail(from, subject, text);
        return mailerRes;
    } catch (error) {
        return error;
    }   
    
}

// Função pela página de serviços
async function contactUs(data){

    let   plan    = "No plan found";
    const from    = data.NDIS_name && data.email ? `${data.NDIS_name}<${ data.email}>` : `${data.NDIS_name || data.email}`;
    const subject = `You have a new e-mail from ${data.NDIS_name} || STA/Respite Care `;

    if(data?.NDIS_plan){
        plan = verifyPlan(data.NDIS_plan);
    }

    let text = `
    ${data.NDIS_name} got in touch through the contact form.
    Here is the information.

    Your name: ${data?.NDIS_name}.
    Your email: ${data?.email}.
    Your phone: ${data?.phone}.
    Number of rooms required: ${data?.bedrooms}.
    Room requirements: ${data?.specific_room}.

    ${ data?.specializedEquipment == 'none' ? '' : `Specialized equipment: ${data?.specializedEquipment}`}
    ${ data?.specializedEquipmentDetails ? `Specialized equipment details: ${data?.specializedEquipmentDetails}` : ''}
    ${ data?.additional_requirements_text ? `Additional requirements text: ${data?.additional_requirements_text}`: ''}
    Is parking required: ${data?.additional_requirements_text}
    Is car transfers: ${data?.isCarTransfers}
    ${data?.support_coodinator == 'yes' ? `

    Support coordinator details:
    Coodinator Name: ${data?.coodinator_name}.
    Coodinator Email: ${data?.coodinator_email}.
    Coodinator Phone: ${data?.coodinator_phone}.

    ` : ''}
    ${data?.family_member == 'yes' ? `

    Data from the person who filled out the form:

    Name of contact person to discuss building your STA: ${data?.contact_person1}.
    Name of person responsible for signing STA service contract: ${data?.contact_person2}.

    `: ''}
    STA Accommodation: ${data?.STA_accomodation}.
    STA Respite Check in date: ${data?.STA_check_in_date}
    STA Respite Check out date: ${data?.STA_check_out_date}
    NDIS Plan managed: ${plan}
    Plan Manager email: ${data?.manager_email}
    `;

    try {
        const responseEmail = await sendEmail(from, subject, text);
        console.log('response email: ' + responseEmail);
        return responseEmail;
    } catch (error) {
        console.log('response email: ' + error);
        return error;
        
    }   
}

//Função da págna contact_us
async function sendContactUs(data) {
    let plan = "No plan found";
    const from = data.name && data.email ? `${data.name}<${ data.email}>` : `${data.name || data.email}`;
    const subject = `You have a new e-mail from ${data.name} || STA/Respite Care `;

    if(data?.NDIS_plan){
        plan = verifyPlan(data.NDIS_plan);
    }

    let text = `
    ${data.name} got in touch through the contact form.
    Here is the information.

    Your email: ${data?.email}.
    Your phone: ${data?.phone}.

    ${data?.family_member == 'yes' ? `
    
    Data from the person who filled out the form:
    His name: ${data?.contact_person1}.
    His email: ${data?.servicePersonEmail}.
    His phone: ${data?.servicePersonPhone}.

    ` : ''}
    ${data?.support_coodinator == 'yes' ? `
    Support coordinator details:
    Coodinator Name: ${data?.coodinator_name}.
    Coodinator Email: ${data?.coodinator_email}.
    Coodinator Phone: ${data?.coodinator_phone}.

    `: ''}
    NDIS Plan managed: ${plan}
    Plan Manager email: ${data?.manager_email}
    `;
    
    try {
        const responseEmail = await sendEmail(from, subject, text);
        return responseEmail;
    } catch (error) {
        return error;
    }   

}

function verifyPlan(plan: string){
    let text = "";
    switch (plan) {
        case "1":
            text = "Plan Managed (Please enter Plan Managers email in the next section if you have)"
            break;
    
        case "2":
            text = "Self Managed"
            break;

        case "3":
            text = "NDIS Managed (Able Koala does not currently offer STA for NDIA managed participants)"
            break;
    }

    return text;
}

// Send emails
function sendEmail(from, subject, messageText) {

    const message = {
        from,
        to: email,
        subject: subject,
        text: messageText ,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message,(error, info) => {
            error ? reject(error) : resolve(info);
        });
    });
}