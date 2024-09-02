import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";

import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
    const response = await fetch( "http://localhost:5000/api/users/register", {
        method: "POST",
        credentials: "include",
        
    
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

    });

    const responseBody = await response.json();

    if(!response.ok){
        throw new Error(responseBody.message);
    }

};

export const signIn =  async (formData: SignInFormData) => {
    const response = await fetch ("http://localhost:5000/api/auth/login",{
        method: "POST",
        credentials: "include",
       
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
           
        },
        body: JSON.stringify(formData),
    });
    const body = await response.json();
    if(!response.ok){
        throw new Error(body.message);
    }
    return body;

};

export const validateToken = async () => {
    const response = await fetch("http://localhost:5000/api/auth/validate-token", {
    credentials: "include",  
    
         headers: {
            "Access-Control-Allow-Origin": "*",
         }
    })

    if(!response.ok){
        throw new Error("Token Invalid")
    }
    return response.json();
};

export const signOut = async ()=>{
    const response = await fetch("http://localhost:5000/api/auth/logout", {
        credentials: "include",
        method: "POST",

         headers: {
            "Access-Control-Allow-Origin": "*",
         }
    });
    if(!response.ok){
        throw new Error("Error during sign out");
    }
};

export const addMyHotel = async (hotelFormData: FormData)=>{
    const response = await fetch("http://localhost:5000/api/my-hotels",{
        credentials: "include",
        body: hotelFormData,
        method: "POST",

        headers: {
            "Access-Control-Allow-Origin": "*",  
        }
    });
    if(!response.ok){
        throw new Error("Error during adding hotels")
    }
    return response.json();
};
