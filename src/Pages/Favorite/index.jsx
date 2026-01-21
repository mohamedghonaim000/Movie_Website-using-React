import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card'

export default function Favorit() {
    const favoritArr = useSelector((state)=>state.favourit.items)
  return (
    <>
     <div className="container mx-auto px-4 py-8">
        <h1 className='text-(--primary-color) my-5'>Your Favorits:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoritArr.map((movie) => (
          <Card data={movie} key={movie.id} favoritFromfavoritComponent={true/false}/>
        ))}
      </div>
    </div>
    
    </>
  )
}
