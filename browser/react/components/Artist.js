import React from 'react';
import Songs from './Songs';
import Album from './Album';
import { Link } from 'react-router';

class Artist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectedArtist = this.props.selectedArtist;

    selectedArtist(artistId);
  }
  render() {
    console.log("this.props.artist", this.props.artist);
    const artist = this.props.artist;
    const album = this.props.album;

    return (
      <div className="artist">
        <h3>ARTIST NAME { artist.name }</h3>
        <h4>ALBUM NAME { album.name }</h4>
        <h4>ALBUM SONGS { album.songs }</h4>
      </div>
    )
  }
}

export default Artist;
