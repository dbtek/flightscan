import React from 'react';

/**
 * Card component.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => (
  <div className={'card ' + props.className}>
    {props.children}
  </div>
)