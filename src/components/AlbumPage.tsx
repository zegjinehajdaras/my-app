import React from "react";
import { Album, Artist } from "../type";
import { Link, useParams } from "react-router-dom";
import artists from "../db";

const AlbumPage = () => {
  const { id } = useParams();

  let foundAlbum: Album | undefined = undefined;
  let foundArtist: Artist | undefined = undefined;

  if (id) {
    foundArtist = artists.find((artist) =>
      artist.albums.find((album) => album.albumId === id)
    );

    foundAlbum = foundArtist?.albums.find((album) => album.albumId === id);
  }
  return (
    <div className="container-arist">
      <img
        src={require(`../images/albums/${foundAlbum?.cover}.jpg`)}
        alt={foundAlbum?.title}
      />
      <h1>Title:{foundAlbum?.title}</h1>
      <h2>Year:{foundAlbum?.year}</h2>
      <h2>Price:{foundAlbum?.price}$</h2>
    </div>
  );
};

export default AlbumPage;
