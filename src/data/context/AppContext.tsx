import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { createContext, useEffect } from "react"
import { ContactUsSend } from "../../models/contact_us_send"
import { db } from "../../services/firebaseConection"

interface AppContextProps {
    postContactUs?: (contactUs:ContactUsSend) => void
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppContextProps){

    async function postContactUs(contactUs:ContactUsSend){
        addDoc(collection(db, "contact"),contactUs)
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
