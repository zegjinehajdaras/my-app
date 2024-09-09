import React from 'react'
import ArtistItem from './ArtistItem'
import { Artist } from '../type'
interface ArtistsListProps {
  artists: Artist[];
}

const ArtistList = (props: ArtistsListProps) => {
  return (
    <div className='artist-item'>
      <h1>Browse the Artist</h1>
   {props.artists.map((artist)=>(
    <ArtistItem key={artist.id} artist={artist}/>
   ))}

    </div>
  )
}

export default ArtistList