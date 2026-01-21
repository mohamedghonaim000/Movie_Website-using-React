import React, { useEffect, useState } from "react";
import { getAllMovies, getMoviebySearch } from "../../Services/movies";
import Card from "../../Components/Card";
import { useOutletContext } from "react-router";

export default function Movies() {
    const [page , setPage] = useState(1)
    const [movies , setMovies]=useState([])
    const {query}= useOutletContext()

    

useEffect(() => {
  if (query.trim()) {
    getMoviebySearch(query).then((res) => setMovies(res.data.results));
  } else {
    getAllMovies(page).then((res) => setMovies(res.data.results));
  }
}, [query, page]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {movies.map((movie) => (
      <Card data={movie} key={movie.id} />
    ))}
  </div>
  <div className="btns flex justify-around my-4">
<button
    className="btn bg-(--primary-color) disabled:bg-gray-400 disabled:cursor-not-allowed"
    onClick={()=>setPage(prev=>prev-1)}
    disabled={page <= 1} 
  >
    Prev
  </button>   
   <button className="btn bg-(--primary-color) " onClick={()=>setPage(next=>next+1)}>Next</button>

  </div>
</div>

    </>
  );
}
