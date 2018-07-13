import expect from 'expect'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Button from '../../src/components/Button'

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
  renderer.render(<Button {...props}>Test Button</Button>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Button component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    // type
    expect(output.type).toBe('a');
    // children
    expect(output.props.children).toBe('Test Button');
    // class names
    expect(output.props.className).toBe('button raised primary success warn danger block')
  });

  it('should call onClick when clicked', () => {
    const { props, output } = setup();
    output.props.onClick();
    expect(props.onClick.calls.length).toBe(1);
  });
});
