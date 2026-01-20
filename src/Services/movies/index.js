import { axiosInstance } from "../axiosInstance";

export function getAllMovies(index){
    return axiosInstance.get("/movie/popular" ,{ 
        params:{
            page:index
        }
    }
    )
}

export function getMovieDtails(id){
    return axiosInstance.get(`/movie/${id}`)
}