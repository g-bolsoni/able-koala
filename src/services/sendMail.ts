import axios from "axios"; 
import { ContactUsSend } from "../models/contact_us_send";
import { ContactUs } from "../models/page_contact_us";

export const  sendResume = async ( name, clientMail, cellphone, file, origin ) =>{
    const data = {
        name,
        clientMail,
        cellphone,
        fileUrl: file,
        origin
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
        console.log(error);
    }
}

export const contactUs = async (contactUs:ContactUs) => {
    try {
        console.log('services sendMail');
        console.log(JSON.stringify(contactUs));
        const res = await axios.post('/api/contact', contactUs);
        return res;
    } catch (error) {
        console.log(error);
        return error;        
    }
}
