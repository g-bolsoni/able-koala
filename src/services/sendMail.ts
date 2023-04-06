import axios from "axios"; 
import useAppData from "../data/hook/useAppData";

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


export const sendContactUs = async () => {
    const { postContactUs } = useAppData()
    console.log(postContactUs);
}