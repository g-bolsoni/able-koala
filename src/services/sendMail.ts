import axios from "axios";
export const  sendContactMail = async (name:string, senderMail:string, cellphone: string) =>{
    const data = {
        name,
        senderMail,
        cellphone
    }
    
    try{
        const teste = await axios.post('/api/contact', data);
        console.log('teste');
        console.log(teste);
        return teste;
    }catch(error){
        return error
    }
};