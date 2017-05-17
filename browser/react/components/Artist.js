import React from 'react';
import Songs from './Songs';
import Album from './Album';
import Albums from './Albums';
import { Link } from 'react-router';

class Artist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    const selectAllArtistAlbums = this.props.selectAllArtistAlbums;
    const selectAllArtistSongs = this.props.selectAllArtistSongs;

    selectArtist(artistId);
    selectAllArtistAlbums(artistId);
    selectAllArtistSongs(artistId);
  }

  render(){
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const album = this.props.album;
    const song = this.props.currentSong;
    const propsToPassToChildren = {
      album: this.props.album,
      albums: this.props.albums,
      selectAlbum: this.selectAlbum,
    }
    console.log("propsToPassToChildren", propsToPassToChildren);
    if(!selectedArtist) return;

    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/albums/${album.albumId}`}>ALBUMS</Link></li>
          <li><Link to={`/songs/${song.id}`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  }
}

export default Artist;


  // render() {
  //   const artist = this.props.selectedArtist;
  //   const album = this.props.album;
  //   if (!artist) return;

  //   return (
  //     <div className="artist">
  //       <h3>{ artist.name }</h3>
  //       <h4>ALBUM NAME { album.name }</h4>
  //       <h4>ALBUM SONGS { album.songs }</h4>
  //     </div>
  //   )
