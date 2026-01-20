import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../Services/movies";
import Card from "../../Components/Card";

export default function Movies() {
    const [page , setPage] = useState(1)
    const [movies , setMovies]=useState([])

        useEffect(()=>{
            getAllMovies(page).then(res=>setMovies(res.data.results))
        }, [page])

  return (
    <>
      <div className="container mx-auto px-4 py-8">
  <div className="grid gap-4 md:grid-cols-3">
    {movies.map((movie) => (
      <Card data={movie} key={movie.id} />
    ))}
  </div>
  <div className="btns flex justify-around my-4">
<button
    className="btn bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    onClick={()=>setPage(prev=>prev-1)}
    disabled={page <= 1} 
  >
    Prev
  </button>   
   <button className="btn bg-amber-600 " onClick={()=>setPage(next=>next+1)}>Next</button>

  </div>
</div>

    </>
  );
}
