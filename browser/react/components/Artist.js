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
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);

  }
  render() {
    const artist = this.props.selectedArtist;
    const album = this.props.album;
    if (!artist) return;

    return (
      <div className="artist">
        <h3>{ artist.name }</h3>
        <h4>ALBUM NAME { album.name }</h4>
        <h4>ALBUM SONGS { album.songs }</h4>
      </div>
    )
  }
}

export default Artist;
