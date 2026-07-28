import { createContext } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const cart=11
    return <AuthContext.Provider value={{cart}}>{children}</AuthContext.Provider>
}