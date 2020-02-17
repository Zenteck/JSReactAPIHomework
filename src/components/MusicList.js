import React, {Fragment} from 'react';
import MusicDetail from './MusicDetail.js';

function MusicList(props) {
  const tracks = props.data.map((entry, artist) =>{
    return (
      <MusicDetail
      title={entry.title.label}
      // artist={entry.artist.label}
      key={artist}>
      </MusicDetail>
    )
  })

return (
  <Fragment>
  {tracks}
  </Fragment>
  )

}

export default MusicList;
