import nodemailer  from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.MAIL_ADDRESS;
const options = {
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
};
const transporter = nodemailer.createTransport(sendgridTransport(options));


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res:NextApiResponse) => {
    try {
        const { senderMail, name, cellphone } = req.body;
        console.log(req.body);
        

        if(!senderMail.trim() || !name.trim() || !cellphone.trim())  res.status(403).send('Verifique os dados!');

        const message = {
            from: email,
            to: email,
            subject: `Nova mensagm de contato - ${name}`,
            html: `
            <p style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;gap:10px;">
                <p>Nome do cliene: <b> ${name} </b></p>
                <p>Email do cliente: <b> ${senderMail} </b></p>
                <p>Telefone do cliene: <b> ${cellphone} </b></p>
            </p>`,
            
            replyTo: senderMail 
        }

        await transporter.sendMail(message, (err, info)=>{
            if (err){
                console.log(err);
            }else{
                console.log('Message sent', info);
            }
        });

        return res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        return res.json({
            error: true,
            message: error.message
        })
    }
}



