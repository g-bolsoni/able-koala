import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
import { ContactUsSend } from "../../models/contact_us_send"
import { ContactUs } from "../../models/page_contact_us"
import { db } from "../../services/firebaseConection"
import { sendContactUs, contactUs } from '../../services/sendMail';
import { toast } from "react-hot-toast";

interface AppContextProps {
    postContactUs?: (contactUs: ContactUsSend) => void
    loading?: boolean
    setLoading?: (value: boolean) => void
    children?: any,
    sendContact?: (contact: ContactUs) => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppContextProps) {

    const [loading, changeLoading] = useState(false)

    function setLoading(value: boolean) {
        changeLoading(value)
    }

    async function postContactUs(contactUs: ContactUsSend) {
        try {
            await addDoc(collection(db, "contact"), contactUs);
            await sendContactUs(contactUs);

            toast.success('Send e-mail Sucessfully!')
        } catch (error) {
            toast.error('Email Failed!');

            console.log(error);
        }
    }

    async function sendContact(contact: ContactUs) {
        try {
            await addDoc(collection(db, "contact_us"), contact);
            await contactUs(contact);
            toast.success('Send e-mail Sucessfully!')
        } catch (error) {
            toast.error('Email Failed!');
            console.log(error);
        }
    }


    return (
        <AppContext.Provider value={{
            postContactUs,
            loading,
            setLoading,
            sendContact
        }}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContext
