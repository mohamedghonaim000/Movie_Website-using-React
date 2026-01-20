import React from "react";

export default function Card({data}) {
  return (
    <>
      <div className="card bg-base-200 w-96 shadow-sm mb-4">
        <figure>
          <img
            src={ `https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
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
