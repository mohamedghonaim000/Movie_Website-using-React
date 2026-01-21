import React from "react";
import { useNavigate } from "react-router";

export default function Card({ data }) {
  const navigate = useNavigate();

  const handleNavigatonToMoveiDetails = (id) => {
    navigate(`/movieDetails/${id}`);
  };

  return (
    <div 
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-base-300 overflow-hidden"
      onClick={() => handleNavigatonToMoveiDetails(data.id)}
    >
      <figure className="relative overflow-hidden h-72">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          {data.adult ? (
            <div className="badge badge-secondary badge-sm font-bold">18+</div>
          ) : (
            <div className="badge badge-accent badge-sm font-bold">+12</div>
          )}
        </div>
      </figure>

      <div className="card-body p-4 gap-1">
        <h2 className="card-title text-sm font-bold line-clamp-1 group-hover:text-amber-600">
          {data.title}
        </h2>
        
        <p className="text-xs text-base-content/70 line-clamp-2">
          {data.overview}
        </p>

        <div className="card-actions justify-end mt-2 pt-2 border-t border-base-300">
          <button className="btn bg-amber-600 btn-xs">Watch</button>
          <button className="btn btn-ghost btn-xs">Download</button>
        </div>
      </div>
    </div>
  );
}