import React from 'react';
import { Link } from 'react-router';

const Albums = (props) => {

  const albums = props.albums;

  return (
    <div>
      <Link to="/albums">
        <h3>Albums</h3>
      </Link>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <a className="thumbnail" href="#">
              <Link to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
              </Link>
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
