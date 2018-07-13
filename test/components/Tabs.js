import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tabs from '../../src/components/Tabs';

function setup() {
  let props = {
  };

  let renderer = new ShallowRenderer();
  renderer.render(<Tabs {...props}>Test tabs</Tabs>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Tabs component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('tabs');
    expect(output.props.children).toBe('Test tabs');
  });
});
