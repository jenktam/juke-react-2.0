import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums';
import Album from '../components/Album';
import Artists from '../components/Artists';
import Artist from '../components/Artist';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import { convertAlbum, convertAlbums, skip } from '../utils';

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;

    this.toggle = this.toggle.bind(this);
    this.toggleOne = this.toggleOne.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
    this.selectAllArtistAlbums = this.selectAllArtistAlbums.bind(this);
    this.selectAllArtistSongs = this.selectAllArtistSongs.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => this.onLoad(convertAlbums(albums)));
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => this.setState({
        artists: artists
      }));
    AUDIO.addEventListener('ended', () =>
      this.next());
    AUDIO.addEventListener('timeupdate', () =>
      this.setProgress(AUDIO.currentTime / AUDIO.duration));
  }
  // need to send artists down as a prop to the children [Module 6 // New Components]
  onLoad (albums) {
    this.setState({
      albums: albums
    });
  }

  play () {
    AUDIO.play();
    this.setState({ isPlaying: true });
  }

  pause () {
    AUDIO.pause();
    this.setState({ isPlaying: false });
  }

  load (currentSong, currentSongList) {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    this.setState({
      currentSong: currentSong,
      currentSongList: currentSongList
    });
  }

  startSong (song, list) {
    this.pause();
    this.load(song, list);
    this.play();
  }

  toggleOne (selectedSong, selectedSongList) {
    if (selectedSong.id !== this.state.currentSong.id)
      this.startSong(selectedSong, selectedSongList);
    else this.toggle();
  }

  toggle () {
    if (this.state.isPlaying) this.pause();
    else this.play();
  }

  next () {
    this.startSong(...skip(1, this.state));
  }

  prev () {
    this.startSong(...skip(-1, this.state));
  }

  setProgress (progress) {
    this.setState({ progress: progress });
  }

  selectAlbum (albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: convertAlbum(album)
      }))
      .catch(console.error.bind(console));
  }

  selectArtist (artistId) {
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({
        selectedArtist: artist
      }))
      .catch(console.error.bind(console));
  }


  selectAllArtistAlbums (artistId) {
    axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(artist => {
        this.setState({
        selectedArtist: artist
      })
    }
    )
      .catch(console.error.bind(console));
  }

    selectAllArtistSongs (artistId) {
    axios.get(`/api/artists/${artistId}/songs`)
      .then(res => res.data)
      .then(artist => this.setState({
        selectedArtist: artist
      }))
      .catch(console.error.bind(console));
  }

  // /api/artists/[theartistid]/albums, and /api/artists/[theartistid]/songs



  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
        {
          this.props.children ?
          React.cloneElement(this.props.children, {
            album: this.state.selectedAlbum,
            albums: this.state.albums,
            selectAlbum: this.selectAlbum,
            currentSong: this.state.currentSong,
            isPlaying: this.state.isPlaying,
            toggleOne: this.toggleOn,
            selectedArtist: this.state.selectedArtist,
            artists: this.state.artists,
            selectArtist: this.selectArtist,
            selectAllArtistAlbums: this.selectAllArtistAlbums,
            selectAllArtistSongs: this.selectAllArtistSongs

          })
          : null
        }
        </div>
        <Player
          currentSong={this.state.currentSong}
          currentSongList={this.state.currentSongList}
          isPlaying={this.state.isPlaying}
          progress={this.state.progress}
          next={this.next}
          prev={this.prev}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
