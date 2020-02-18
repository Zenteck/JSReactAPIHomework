import React from 'react';
import MusicDetail from '../components/MusicList.js'

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    };
  }

componentDidMount(){
  console.log('Component did mount');
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
    .then(res => res.json())
    .then(data => this.setState({tracks: data.feed.entry}))
    .catch(err => console.error)
}

  render(){
  const chart = tracks.map(track) => {
      track.titel


  }


    return()
    <div>
    <h2>Music Container</h2>
    <MusicDetail tracks={this.state.tracks}/>
    </div>
    )
  }

}

export default MusicContainer;
