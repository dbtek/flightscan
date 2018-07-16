React Flights Search App :airplane:
-----

## Tech
This app is built on following technologies.
- create-react-app
- React (UI)
- Redux (Data Flow)
- ES6 / ES7 standards
- Sass (With node-sass-chokidar)
- Mocha, Expect.js (Test suite)

## Installation
Yarn is documented here, npm is ok too.
```
 $ yarn
```

## Build & Run
```
 $ yarn dev
```
Go to [localhost:3000](http://localhost:3000).

## Tests
Unit tests can be run with:
```
 $ yarn test
```

## Build for Production
Bundle for production is created under `/build` directory with:
```
 $ yarn build
```

## Data
Fake data is produced with [JSON Generator](http://json-generator.com/).

- Cities data stored in a json file named `flights.json` under `/app` directory.
- Flights data stored in a json file named `flights.json` under `/app` directory.

Cities are plain strings. Each flight is an object containing properties:
- `from`: An object to represent departing airport. Contains:
  - `short`: Short name of the airport, code.
  - `full`: Full name of the airport.
- `to`: Same struture with `from` to represent destination airport.
- `code`: Flight code, String.
- `departure`: Departure time, ISO 8601 Date String.
- `arrival`: Arrival time, ISO 8601 Date String.
- `price`: One way flight price.

## Assumptions
- Full names of airports includes relevant city name.
- Two way price is equal to out flight price + return flight price.
- No service fees are being charged.
- Flights are scheduled between Jun 10 2018 & Jul 20 2018.
