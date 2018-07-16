import React from 'react';
import classnames from 'classnames';

/**
 * Button component.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  const className = classnames('button', {
    raised: props.raised,
    primary: props.primary,
    success: props.success,
    warn: props.warn,
    danger: props.danger,
    block: props.block
  }, props.className);

  return (
    <a href={props.href} onClick={props.onClick}
      className={className}>
      {props.children}
    </a>
  )
}
