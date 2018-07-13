import expect from 'expect'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Card from '../../src/components/Card'

function setup() {
  let props = {
    raised: true,
    primary: true,
    success: true,
    warn: true,
    danger: true,
    block: true,
    onClick: expect.createSpy()
  };

  let renderer = new ShallowRenderer();
  renderer.render(<Card {...props}>Test Card</Card>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Card component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('card');
    expect(output.props.children).toBe('Test Card');
  });
});
