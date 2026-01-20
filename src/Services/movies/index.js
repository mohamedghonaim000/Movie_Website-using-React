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
// https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=%7BMovieName
export function getMoviebySearch(query){
    return axiosInstance.get("/search/movie",
        {
            params:{
                query:query
            }
        }
    )
}