import React, {Fragment} from 'react';
import MusicDetail from './MusicDetail.js';

const MusicList = (props) => {
  const tracks = props.tracks.map((entry, title) => {
    return (
      <MusicDetail>

      </MusicDetail>
    )
  })

return (
  <Fragment>
    <MusicDetail/>
  </Fragment>
  )

}

export default MusicList;

// artist={entry.artist.label}
// value={entry}
// key={entry.title}>
