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

const mailer = ({name, clientMail, cellphone, fileUrl}) =>{

    const from = name && clientMail ? `${name}<${clientMail}>` : `${name || clientMail}`;
    const message = {
        from,
        to: `${email}`,
        subject: `Nova mensagem de ${name}`,
        text: `Esse é um texto e o client te o seguinte telefone ${cellphone}, e seu currículo ${fileUrl}`,
        replyTo: from
    }
    
    return new Promise((resolve, reject) => {
        transporter.sendMail(message,(error, info) => {
            error ? reject(error) : resolve(info);
        });
    });
}

// eslint-disable-next-line import/no-anonymous-default-export  
export default async (req: NextApiRequest, res:NextApiResponse) => {
    const {clientMail, name, cellphone, fileUrl} = req.body;
    if(!clientMail || !name || !cellphone ) {
        res.status(403).send('Erro com os campos do E-mail');
        return;
    }
    
    try {
        const mailerRes = await mailer({ name, clientMail, cellphone, fileUrl });
        res.send(mailerRes);
      } catch (error) {
        res.status(500).send("Erro ao enviar o e-mail");
      }

}



