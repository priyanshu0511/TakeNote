import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    
    const [error,setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} =useAuthContext();

    const login = async(email,password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/login`,{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({email,password})
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setIsLoading(false);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type: 'LOGIN',payload: json})
            setIsLoading(false);
        }

    }

    return {login, isLoading, error}

}