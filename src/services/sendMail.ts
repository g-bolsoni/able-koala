import axios from "axios";
export const  sendContactMail = async (name:string, clientMail:string, cellphone: string) =>{
    const data = {
        name,
        clientMail,
        cellphone
    }
    console.log(data);
    try{
        const res = await axios.post('/api/contact', data);
        return res;
    }catch(error){
        return error
    }
};