import React from 'react'
import { Artist } from '../type'
import { Link } from 'react-router-dom'
interface ArtistItemProps {
  artist: Artist;
}
const ArtistItem = (props: ArtistItemProps) => {

  const coverImage = require(`../images/covers/${props.artist.cover}.jpg`);
  return (
    <div>
<Link to={`/artist/${props.artist.id}`}>
<img src={coverImage} alt={props.artist.name} />
</Link>
<h1 className='artist-name'>{props.artist.name}</h1>


    </div>
  )
}

export default ArtistItem