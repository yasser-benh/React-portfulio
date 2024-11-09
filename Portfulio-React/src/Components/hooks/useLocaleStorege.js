import { useState } from "react"

export const useLocaleStorage =(key , initialValue) => {
    const [storedValue , setStoredValue] =useState (()=> {
        try{
            const item = window.localStorage.getItem(key)
            return item? item : initialValue
        } catch(error) {
            console.log(error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            window.localStorage.setItem(key, value)
            setStoredValue(value)
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue , setValue]
}