import expect from 'expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../../src/components/Button';
import Card from '../../src/components/Card';
import FlightDetails from '../../src/components/FlightDetails';
import FlightReturning from '../../src/components/FlightReturning';

import mockFlights from '../../src/flights_mock.json';

function setup() {
  let props = {
    out: mockFlights[0],
    return: mockFlights[1],
    passengers: 2
  };

  let renderer = new ShallowRenderer();
  renderer.render(<FlightReturning {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Flight component', () => {
  it('should render correctly', () => {
    const { output, props } = setup();

    expect(TestUtils.isElementOfType(output, Card)).toBe(true);
    expect(output.props.className).toBe('flight return');

    const [outDetails, returnDetails, price, actions] = output.props.children;
    expect(TestUtils.isElementOfType(outDetails, FlightDetails)).toBe(true);
    expect(TestUtils.isElementOfType(returnDetails, FlightDetails)).toBe(true);

    expect(price.type).toBe('div');
    expect(price.props.className).toBe('price');
    expect(price.props.children.type).toBe('span');
    expect(price.props.children.props.children).toEqual(['£', (props.out.price + props.return.price) * props.passengers]);

    expect(actions.type).toBe('div');
    expect(actions.props.className).toBe('actions');
    expect(TestUtils.isElementOfType(actions.props.children, Button)).toBe(true);
  });
});
