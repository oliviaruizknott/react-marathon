import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className;
    let playlists = this.props.data.playlists.map((playlist) => {
      if (playlist.id === this.props.selectedPlaylistId) {
        className = "selected";
      } else {
        className = "";
      }

      let handlePlaylistSelect = () => {
        this.props.handlePlaylistSelect(playlist.id);
      };

      return (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    })

    return (
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection;
