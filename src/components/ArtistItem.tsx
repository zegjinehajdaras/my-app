import React from "react";
import { Artist } from "../type";
import { Link } from "react-router-dom";

interface ArtistItemProps {
  artist: Artist;
}
const ArtistItem = (props: ArtistItemProps) => {
  const { artist } = props;
  const coverImage = require(`../images/covers/${artist.cover}.jpg`);
  return (
    <div>
      <Link to={`/artist/${artist.id}`}>
        <img src={coverImage} alt={artist.name} />
      </Link>
      <h1 className="artist-name">{artist.name}</h1>
    </div>
  );
};

export default ArtistItem;
