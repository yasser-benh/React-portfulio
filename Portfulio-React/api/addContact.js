import { BASE_URL } from "../Constants"

export const addContact = async (data) => {
     const response = await fetch (`${BASE_URL}/contact`,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(data)
     })

     if(!response.ok) {
        throw new Error ('Problem Network')
     }
     return response.json()
}