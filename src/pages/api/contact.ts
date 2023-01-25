import nodemailer  from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
// import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.MAIL_ADDRESS;
const options = {
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
};
const transporter = nodemailer.createTransport(sendgridTransport(options));

const sendEmail = async (email, senderMail, name, cellphone) =>{
    const mail = {
        from: email,
        to: email,
        subject:`Nova mensagm de contato - ${name}`,
        html: `<p><b>Email</b> ${senderMail}<br/> <b>Telefone: </b>${cellphone}</p>`,
    };

    console.log('teste 13');
    try {
        const aaaaa = await transporter.sendMail(mail);
        console.log(aaaaa);
        console.log('teste 123');

        console.log('E-mail enviado com sucesso');
        return aaaaa;
    } catch (err) {
        console.log('Erro ao enviar e-mail:', err);
        return
    }
    

}

export default sendEmail;

// // eslint-disable-next-line import/no-anonymous-default-export
// export default async (req: NextApiRequest, res:NextApiResponse) => {


//     try {
//         const { senderMail, name, cellphone } = req.body;
//         console.log(req.body);
        

//         if(!senderMail.trim() || !name.trim() || !cellphone.trim())  res.status(403).send('Verifique os dados!');

//         const message = {
//             from: email,
//             to: email,
//             subject: `Nova mensagm de contato - ${name}`,
//             html: `<p><b>Email</b> ${senderMail}<br/> <b>Mensagem: </b>${cellphone}</p>`,
//             replyTo: senderMail 
//         }

//         await transporter.sendMail(message, (err, info)=>{
//             if (err){
//                 console.log(err);
//             }else{
//                 console.log('Message sent', info);
//             }
//         });

//         return res.status(200).send('Mensagem enviada com sucesso!');
//     } catch (error) {
//         return res.json({
//             error: true,
//             message: error.message
//         })
//     }
// }



