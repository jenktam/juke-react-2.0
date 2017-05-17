import React from 'react';
import Artist from './Artist.js';
import { Link } from 'react-router';

const Artists = (props) => {

    const artists = props.artists;

  return (
    <div>
    <Link to="/artists">
      <h3>Artists</h3>
    </Link>
      <div className="list-group">
      {
        artists.map(artist => {
          return (
            <div className="list-group-item" key={artist.id}>
              <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
            </div>
          )
        })
      }
      </div>
  </div>
  )
}

export default Artists;
