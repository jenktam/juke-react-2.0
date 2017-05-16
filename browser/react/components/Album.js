import React from 'react';
import Songs from '../components/Songs';
<<<<<<< HEAD

const Album = (props) => {

  const album = props.album;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
=======
import { Link } from 'react-router';

class Album extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render () {
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
            <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2
}

export default Album;
