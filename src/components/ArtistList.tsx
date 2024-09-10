import React from 'react'
import ArtistItem from './ArtistItem'
import { Artist } from '../type'
import artists from '../db'


const ArtistList = () => {
  return (
    <div className='artist-item'>
      <h1>Browse the Artist</h1>
   {artists.map((artist:Artist,index:number)=>(
    <ArtistItem key={index} artist={artist}/>
   ))}

    </div>
  )
}

export default ArtistList