import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Header from '../../app/components/Header'

function setup() {
  let props = {

    onClick: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Header {...props}>Test Header</Header>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Header component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('h1');
    expect(output.props.className).toBe('header');
    expect(output.props.children).toBe('Test Header');
  });
});