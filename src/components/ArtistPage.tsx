import React from "react";
import artists from "../db";
import { Artist } from "../type";
import { useParams } from "react-router-dom";
import { Album } from "../type";
import AlbumsList from "./AlbumsList";
const ArtistPage = () => {
  const { id } = useParams();
  let foundArtist: Artist | undefined = undefined;
  if (id) {
    foundArtist = artists.find((artist) => artist.id === parseInt(id));
  }

  return (
    <div className=" container-arist">
      <img src={require(`../images/covers/${foundArtist?.cover}.jpg`)} alt="" />
      <h1>{foundArtist?.name}</h1>
      <p>{foundArtist?.bio}</p>
      <AlbumsList albums={foundArtist?.albums ||[]} />
    </div>
  );
};

export default ArtistPage;
