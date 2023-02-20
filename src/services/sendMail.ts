import axios from "axios"; 

export const  sendContactMail = async (name:string, clientMail:string, cellphone: string, file: string) =>{
    const data = {
        name,
        clientMail,
        cellphone,
        fileUrl: file
    }
    
    try{
        const res = await axios.post('/api/contact', data);
        return res;
    }catch(error){
        return error
    }
};