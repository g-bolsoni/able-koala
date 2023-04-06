import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
import { ContactUsSend } from "../../models/contact_us_send"
import { db } from "../../services/firebaseConection"
import { sendContactUs } from '../../services/sendMail';
import { toast } from "react-hot-toast";

interface AppContextProps {
    postContactUs?: (contactUs:ContactUsSend) => void
    loading?: boolean
    setLoading?: (value: boolean) => void
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppContextProps){

    const [loading, changeLoading] = useState(false)

    function setLoading(value: boolean) {
        changeLoading(value)
    }

    async function postContactUs(contactUs:ContactUsSend){
        try {
            setLoading(true)
            await addDoc(collection(db, "contact"),contactUs) 
            await sendContactUs(contactUs);
            setLoading(false)   
            toast.success('Send e-mail Sucessfully!')                  
        } catch (error) {
            
        }        
    }

    return (
        <AppContext.Provider value={{
            postContactUs,
            loading,
            setLoading
        }}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContext
