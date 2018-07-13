import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
import moment from 'moment';
import FlightDetails from '../../src/components/FlightDetails';
import mockFlights from '../../src/flights_mock.json';

function setup() {
  let props = {
    ...mockFlights[0]
  };

  let renderer = new ShallowRenderer();
  renderer.render(<FlightDetails {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('FlightDetails component', () => {
  it('should render correctly', () => {
    const { output, props } = setup();

    const departure = moment(new Date(props.departure));
    const arrival = moment(new Date(props.arrival));

    expect(output.type).toBe('div');
    expect(output.props.className).toBe('flight-details');

    const [code, route, times] = output.props.children;
    expect(code.type).toBe('div');
    expect(code.props.className).toBe('code');
    expect(code.props.children).toBe(props.code);

    expect(route.type).toBe('div');
    expect(route.props.className).toBe('route');
    expect(route.props.children[0]).toBe(props.from.short);
    expect(route.props.children[4]).toBe(props.to.short);

    expect(times.type).toBe('div');
    expect(times.props.className).toBe('times');
    expect(times.props.children[2]).toBe(departure.format('LT'));
    expect(times.props.children[6]).toBe(arrival.format('LT'));
  });
});
