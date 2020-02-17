import React from 'react';

const MusicDetail = (props) =>{

  if (!props.feed) return null;

  return (
    <div>
    <h3>{props.title}</h3>
    <p>{props.artist}</p>
    </div>
  )
}

export default MusicDetail;
