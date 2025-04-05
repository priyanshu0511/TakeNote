import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const signup = async(name,email,password) =>{

        setIsLoading(true);
        setError(null);

        console.log("Sending signup request with:", { name, email, password });

        const response = await fetch('http://localhost:5000/api/user/signup',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({name,email,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload: json})
            setIsLoading(false);
        }
    }

    return {signup, isLoading, error}
}