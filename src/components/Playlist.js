import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <li onClick={this.props.handlePlaylistSelect} className={this.props.className}>
        {this.props.name}
      </li>
    )
  }
}

export default Playlist;
