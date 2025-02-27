import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchRestCountries = async() => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
    return data;
}

export const useRestCountries = () => {
    return useQuery({
        queryKey: ["RestCountries"],
        queryFn: fetchRestCountries,
        refetchOnWindowFocus: false,
    })
}