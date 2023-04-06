import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { createContext, useEffect } from "react"
import { ContactUsSend } from "../../models/contact_us_send"
import { db } from "../../services/firebaseConection"
import { sendContactUs } from '../../services/sendMail';

interface AppContextProps {
    postContactUs?: (contactUs:ContactUsSend) => void
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppContextProps){

    async function postContactUs(contactUs:ContactUsSend){
        try {
            await addDoc(collection(db, "contact"),contactUs) 
            await sendContactUs();                     
        } catch (error) {
            
        }
        
    }

    return (
        <AppContext.Provider value={{
            postContactUs
        }}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContext
