import React from 'react';

export default (props) => (
  <div className={'card ' + props.className}>
    {props.children}
  </div>
)