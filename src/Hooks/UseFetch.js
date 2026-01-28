import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction, searchMovieaction } from "../Store/Slices/movies";


const useFetchmovies = (page , query)=>{

  const { movies, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction(page));
  }, [page, dispatch]);

  useEffect(() => {
    if (query && query.trim()) {
      dispatch(searchMovieaction(query));
    }
  }, [query, dispatch]);

return {movies, loading, error }
}

export default useFetchmovies