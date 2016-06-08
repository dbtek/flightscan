import React from 'react';
import classnames from 'classnames';
import Button from './Button';

/**
 * Tab component.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  const className = classnames('tab', {
    active: props.active,
  });
  return (
  <Button block raised
    primary={props.active}
    className={className}
    onClick={props.onClick}>
    {props.label}<br/>
    {props.icon}
  </Button>
  )
}