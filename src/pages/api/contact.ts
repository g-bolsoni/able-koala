import nodemailer  from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.MAIL_ADDRESS

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth:{
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res:NextApiResponse) => {
    try {
        const { senderMail, name, content, file} = req.body;
        if(!senderMail.trim() || !name.trim() || !content.trim() || !file.trim())  res.status(403).send('');

        const message = {
            from: email,
            to: email,
            subject: `Nova mensagm de contato - ${name}`,
            html: `<p><b>Email</b> ${senderMail}<br/> <b>Mensagem: </b>${content}</p></br>Arquivo: ${file}`,
            replyTo: senderMail 
        }

        await transporter.sendMail(message, (err, info)=>{
            if (err) console.log(err);
            else console.log('Message sent', info)
        });

        return res.send('');
    } catch (error) {
        return res.json({
            error: true,
            message: error.message
        })
    }
}