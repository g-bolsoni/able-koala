import axios from "axios";
export const  sendContactMail = async (name:string, senderMail:string, content: string, file: JSON) =>{
    const data = {
        name,
        senderMail,
        content,
        file
    }
    console.log('data ', data.file)
    try{
        const teste = await axios.post('/api/contact', data);
        console.log('teste');
        console.log(teste);
        return teste;
    }catch(error){
        return error
    }
};