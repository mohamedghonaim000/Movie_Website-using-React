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
export function getMoviebySearch(query){
    return axiosInstance.get("/search/movie",
        {
            params:{
                query:query
            }
        }
    )
}