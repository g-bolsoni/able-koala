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

    const { NDIS_name } = req.body;
    const {clientMail, name, cellphone } = req.body


    if(NDIS_name){  
        const response = await contactUs(req.body); 
        let responseStatus = response.response.split(' ')[0];
        let responseMessage = response.response.split(' ')[1];
        
        if(responseStatus && responseMessage){
             res.status(responseStatus).send(responseMessage)
        }else{
             res.status(500).send("Erro ao enviar o e-mail");
        }
    }

    if(clientMail || cellphone || name){ 

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


async function contactUs(data){

    const from = data.NDIS_name && data.email ? `${data.NDIS_name}<${ data.email}>` : `${data.NDIS_name || data.email}`;
    const subject = `You have a new e-mail from ${data.NDIS_name}`;

    let text = `
    ${data.NDIS_name} got in touch through the contact form.
    Here is the information.

    Your name: ${data?.NDIS_name}.
    Your email: ${data?.email}.
    Your phone: ${data?.phone}.
    Number of rooms required: ${data?.bedrooms}.
    Room requirements: ${data?.specific_room}.
    Amt per day: ${data?.vouchers} AUD.  

    Does it have a coordinator: ${data?.support_coodinator}
    ${data?.support_coodinator == 'yes' && `
    Coodinator Name: ${data?.coodinator_name}.
    Coodinator Email: ${data?.coodinator_email}.
    Coodinator Phone: ${data?.coodinator_phone}.
    `}

    Did someone else fill out the form: ${data?.family_member}.
    ${data?.family_member == 'yes' && `
    Name of contact person to discuss building your STA: ${data?.contact_person1}.
    Name of person responsible for signing STA service contract: ${data?.contact_person2}.
    `}
    STA Accommodation: ${data?.STA_accomodation}.
    STA Respite Check in date: ${data?.STA_check_in_date}
    STA Respite Check out date: ${data?.STA_check_out_date}
    NDIS Plan managed: ${data?.NDIS_plan}
    Plan Manager email: ${data?.manager_email}
    `;

    try {
        const responseEmail = await sendEmail(from, subject, text);
        return responseEmail;
    } catch (error) {
        return error;
    }   
}


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