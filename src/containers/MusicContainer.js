import React from 'react';
import MusicDetail from '../components/MusicDetail.js'

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      selectedTrackName: ''
    };
  }
}
