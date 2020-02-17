import React from 'react';

const MusicDetail = (props) => {

  if (!props.entry) return null;

  return (
    <div>
    <h3>{props.entry.title}</h3>
    </div>
  )

}
