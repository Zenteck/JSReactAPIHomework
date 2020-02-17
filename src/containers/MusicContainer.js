import React from 'react';
import MusicList from '../components/MusicList.js'

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
    .then(console.log(this.tracks))
    .catch(err => console.error)
}

  render(){

    return(
    <div>
    <h2>Music Container</h2>
    <MusicList/>
    </div>
    )
  }

}

export default MusicContainer;
