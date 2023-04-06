import axios from "axios"; 

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
    // aqui faz o envio de email de contato
    console.log('teste')
}