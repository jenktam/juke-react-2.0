import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router';
>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2

const Albums = (props) => {

  const albums = props.albums;
<<<<<<< HEAD
  const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Albums</h3>
=======

  return (
    <div>
      <Link to="/albums">
        <h3>Albums</h3>
      </Link>
>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
<<<<<<< HEAD
            <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
              <img src={ album.imageUrl } />
=======
            <a className="thumbnail" href="#">
              <Link to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
              </Link>
>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </a>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Albums;
