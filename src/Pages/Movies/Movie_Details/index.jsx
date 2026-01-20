import React, { useEffect, useState } from 'react'
import { getMovieDtails } from '../../../Services/movies'
import { useParams } from 'react-router';

export default function MovieDetails() {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        getMovieDtails(id).then((res) => setMovieDetail(res.data))
    }, [id])

    if (!movieDetail) return <div className="flex justify-center p-10"><span className="loading loading-spinner loading-lg"></span></div>

    return (
        <div className="min-h-screen py-10 px-4 relative overflow-hidden">
            <div 
                className="absolute inset-0 z-0 opacity-20 blur-3xl scale-110"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto bg-base-100/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <div className="grid md:grid-cols-12 gap-0">
                    
                    <div className="md:col-span-4 lg:col-span-3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                            alt={movieDetail.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
                        />
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <h1 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
                                {movieDetail.title}
                            </h1>
                            {movieDetail.status && (
                                <div className="badge badge-primary badge-outline font-bold p-3">
                                    {movieDetail.status}
                                </div>
                            )}
                        </div>

                        {movieDetail.tagline && (
                            <p className="text-xl italic text-primary font-medium mb-6">
                                "{movieDetail.tagline}"
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3 mb-8">
                           {movieDetail.genres?.map(genre => (
                               <span key={genre.id} className="badge badge-ghost border-white/20 p-3">{genre.name}</span>
                           ))}
                        </div>

                        <div className="space-y-4 max-w-3xl">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 text-left">Overview</h3>
                            <p className="text-lg leading-relaxed text-base-content/80 text-left">
                                {movieDetail.overview}
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm uppercase">Rating</span>
                                <span className="text-xl font-bold text-yellow-500 flex items-center gap-1">
                                    ⭐ {movieDetail.vote_average?.toFixed(1)}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm uppercase">Runtime</span>
                                <span className="text-xl font-bold">⏱ {movieDetail.runtime} min</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm uppercase">Release Date</span>
                                <span className="text-xl font-bold">📅 {movieDetail.release_date}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm uppercase">Language</span>
                                <span className="text-xl font-bold uppercase">🌐 {movieDetail.original_language}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}