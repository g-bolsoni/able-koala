import axios from "axios";
export const  sendContactMail = async (name:string, senderMail:string, content: string, file: JSON) =>{
    const data = {
        name,
        senderMail,
        content,
        file
    }

    try{
        return await axios.post('/api/contact', data)
    }catch(error){
        return error
    }
};