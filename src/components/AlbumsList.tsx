import React from "react";
import { Album } from "../type";
import { Link } from "react-router-dom";

interface AlbumsListProps {
  albums: Album[];
}

const AlbumsList = (props: AlbumsListProps) => {
  return (
    <div>
      <div className="image-container">
        {props.albums.map((album) => (
          <Link to={`/album/${album.albumId}`} key={album.albumId}>
            <div className="album-item">
              <img
                src={require(`../images/albums/${album.cover}.jpg`)}
                alt={album.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
