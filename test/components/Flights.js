import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import moment from 'moment';

import Button from '../../app/components/Button';
import Card from '../../app/components/Card';
import FlightDetails from '../../app/components/FlightDetails';
import Flight from '../../app/components/Flight';

import mockFlights from '../../app/_mock-flights.json';

function setup() {
  let props = {
    out: mockFlights[0],
    return: mockFlights[1],
    passengers: 2
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Flight {...props} />);
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