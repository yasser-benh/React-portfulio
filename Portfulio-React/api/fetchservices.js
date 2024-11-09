import { BASE_URL } from "../Constants"

export const fetchServices = async (language) => {
    const response = await fetch (`${BASE_URL}/servecis?language=${language}`)
    if (!response.ok) {
        throw new Error ("Problem FetchData")
    }
    return response.json()
}