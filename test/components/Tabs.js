import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Tabs from '../../app/components/Tabs'
import Button from '../../app/components/Button'

function setup() {
  let props = {
  };

  let renderer = TestUtils.createRenderer();
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