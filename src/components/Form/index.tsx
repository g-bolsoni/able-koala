import style from './style.module.scss';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [messageText, setMessageText] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(!email.trim() || !name.trim() || !phone.trim() ) {
            toast.error('Preencha todos os campos', {style: {
                background: '#ff5555',
                color: '#fff'
            }});
            return;
        }

        try {

            setLoading(true);
            await sendContactMail(name, email, phone, '', messageText);
            toast.success("Currículo enviado com sucesso");
            setName('');
            setEmail('');
            setPhone('');

        } catch (error) {
        toast.error('Ocorreu um erro ao enviar seu contato, tente mais tarde', {style: {
            background: '#ff5555',
            color: '#fff'
        }});

        return;

        } finally{
            setLoading(false);
        }
    }
    return (
        <>
        <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <h6 className={style.title}> Send us a message</h6>
            </div>
            <div className="mb-3">
                <input type="text" name="name" value={name} id="input_name" className={style.formControl} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="email" name="email" required value={email} id="input_email" autoComplete='off' className={style.formControl} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="tel" name="phone" value={phone} id="input_phone" className={style.formControl} placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="mb-3">
                <select name="how_can_we_help" id="select_how_can_we_help" className={style.formControl}>
                    <option value="0">How can we help?</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="where_did_you_hear_about_us" id="where_did_you_hear_about_us" className={style.formControl}>
                    <option value="0">How did yout header about us?</option>
                </select>
            </div>

            <div className="mb-3">
                <textarea name="messageText" value={messageText} id="inputMessageText" placeholder='Tell us a little more about the care that yout need.' className={style.formControl} rows={5} onChange={(e) => setMessageText(e.target.value)}></textarea>
            </div>

            <button type="submit" className={`${style.submit_button} ${loading ? style.disabled : ''}`} disabled={loading}>Submit</button>
        </form>
        </>
        )
    }