import React, { createContext, useState } from 'react'

export const Authcontext=createContext();

export const Authprovider=({Children})=>{
    const [data,setData]=useState([]);
    const [userid,setUserid]=useState("");
    const [password,setPassword]=useState("");

    return(
        <Authcontext.Provider value={{data,setData,userid,setUserid,password,setPassword}}>
            {Children}
        </Authcontext.Provider>
    )
}