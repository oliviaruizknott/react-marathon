import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className;
    let songs = this.props.songs.map((song) => {
      if (song.id === this.props.selectedSongId) {
        className = "selected";
      } else {
        className = "";
      }

      let handleSongSelect = () => {
        this.props.handleSongSelect(song.id);
      };

      return(
        <Song
        key = {song.id}
        name = {song.name}
        artist = {song.artist}
        album = {song.album}
        id = {song.id}
        className = {className}
        handleSongSelect = {handleSongSelect}
        />
      )
    });

    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection;
