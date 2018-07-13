import React from 'react';
import classnames from 'classnames';
/**
 * Card component.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => (
  <div className={ classnames('card', props.className) }>
    {props.children}
  </div>
)