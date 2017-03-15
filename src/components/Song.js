import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <li onClick={this.props.handleSongSelect} className={this.props.className}>
        {this.props.name} — {this.props.artist}
      </li>
    )
  }
}

export default Song;
