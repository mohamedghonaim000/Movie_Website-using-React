import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { addItem, removeItem } from "../../Store/Slices";
import { useDispatch } from "react-redux";
import { FaTrashCan } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

export default function Card({ data , favoritFromfavoritComponent }) {
  const navigate = useNavigate();

  const handleNavigatonToMoveiDetails = (id) => {
    navigate(`/movieDetails/${id}`);
  };

  const [isClicked , setIsclicked]=useState(false)
  

  const dispatch = useDispatch()

  const addTofavourit = (item)=>{
    dispatch(addItem(item))
  }

  const removeFromfavourit = (id)=>{
    dispatch(removeItem(id))
  }


 

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
        <button 
          className="absolute top-2 left-2 z-10 p-1.5 rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-125"
        >
        {!favoritFromfavoritComponent?(
           <FaStar 
          onClick={(e)=>{
            e.stopPropagation()
            if(!isClicked){
              addTofavourit(data)
              toast.success(`${data.title} Added To Favorits`)
            }else{
              removeFromfavourit(data.id)
              toast.error(`${data.title} Removed From Favorits`)

            }
             setIsclicked(!isClicked)
            }}
            size={18} 
             className={`transition-colors duration-300 ${isClicked ? "text-(--primary-color)" : "text-white"}`}
          />
        ):(
          <FaTrashCan
             onClick={(e)=>{
            e.stopPropagation()
            removeFromfavourit(data.id)
            }}
            size={18} 
             className="transition-colors duration-300 text-red-700" 
          />
        )}
         
        </button>
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