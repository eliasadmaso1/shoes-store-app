import { useContext} from 'react';
import {createContext} from 'react'

 export const MyContext = createContext();

 export const ContextProvider = MyContext.Provider

export const useMyContext = ()=>{
    return useContext(MyContext);
}



    
   

