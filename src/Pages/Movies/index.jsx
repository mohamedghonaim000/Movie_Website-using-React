import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { useOutletContext } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieAction, searchMovieaction } from "../../Store/Slices/movies";
import Loading from "../Loading";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { query } = useOutletContext();

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Card data={movie} key={movie.id} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
      <div className="btns flex justify-around my-4">
        <button
          className="btn bg-(--primary-color) text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
        <button
          className="btn bg-(--primary-color) text-white px-4 py-2 rounded"
          onClick={() => setPage((next) => next + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
