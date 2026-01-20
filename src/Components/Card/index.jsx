import React from "react";
import { useNavigate } from "react-router";

export default function Card({data}) {
    const navigate = useNavigate()

    const handleNavigatonToMoveiDetails = (id)=>{
        navigate(`/movieDetails/${id}`)
    }

  return (
    <>
      <div className="card bg-base-200 w-96 shadow-sm mb-4"  onClick={()=>handleNavigatonToMoveiDetails(data.id)}>
        <figure>
          <img
            src={ `https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}  {data.adult?<div className="badge  badge-secondary">For Adults</div>:<div className="badge badge-accent">+12</div>}
          </h2>
          <p>
            {data.overview}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Watch</div>
            <div className="badge badge-outline">Dowenload</div>
          </div>
        </div>
      </div>
    </>
  );
}
