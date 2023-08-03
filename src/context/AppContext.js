import { createContext, useState } from "react";

export const AppContext=createContext();

export default function AppContextProvider({children}){

    const [term, setTerm]=useState('');
    const [isLoading, setIsLoading]=useState(false);


    const value={
        term,
        setTerm,
        isLoading,
        setIsLoading
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}