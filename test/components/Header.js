import expect from 'expect'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../src/components/Header'

function setup() {
  let props = {

    onClick: expect.createSpy()
  };

  let renderer = new ShallowRenderer();
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
