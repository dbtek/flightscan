import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Tab from '../../app/components/Tab'
import Button from '../../app/components/Button'

function setup() {
  let props = {
    label: 'Test Tab',
    icon: <span>Test icon</span>,
    active: true
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Tab {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Tab component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    // should render an underliying button
    expect(TestUtils.isElementOfType(output, Button)).toBe(true);
    expect(output.props.className).toBe('tab active');
    // should have correct button props
    expect(output.props.block).toBe(true);
    expect(output.props.raised).toBe(true);
    expect(output.props.primary).toBe(true);
    // children
    expect(output.props.children[0]).toBe('Test Tab');
    expect(output.props.children[1].type).toBe('br');
    expect(output.props.children[2].type).toBe('span');
  });
});