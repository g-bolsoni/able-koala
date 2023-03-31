import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { createContext, useEffect } from "react"
import { db } from "../../services/firebaseConection"

interface AppContextProps {
    postContactUs?: () => void
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppContextProps){

    async function postContactUs(){
        addDoc(collection(db, "contact"),{
            "teste": "teste"
        })
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
