import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params :{
        api_key:'13cd1657daf2e762e93d49fcefe59732',
        language:localStorage.getItem('lang')
    }
})