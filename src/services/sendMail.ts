import axios from "axios"; 
import { ContactUsSend } from "../models/contact_us_send";

export const  sendContactMail = async (name:string, clientMail:string, cellphone: string, file: string, message:String) =>{

    const data = {
        name,
        clientMail,
        cellphone,
        fileUrl: file,
        messageText:message
    }
    
    try{
        const res = await axios.post('/api/contact', data);
        return res;
    }catch(error){
        return error
    }
};


export const sendContactUs = async (contactUs:ContactUsSend) => {

    try {
        const res = await axios.post('/api/contact', contactUs)
        console.log(res);
        
        return res;
    } catch (error) {
        
    }

    // aqui faz o envio de email de contato
    console.log('teste')
}