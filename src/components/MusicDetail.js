import React from 'react';

function MusicDetail (props) {

return(

    <div>
    <h4>This is a Music Detail</h4>
    <h3>{props.track.title}</h3>
    </div>

  )
}


export default MusicDetail;
