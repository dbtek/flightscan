React Flights Search App
-----

## Tech
This app is built on following technologies.
- React (UI)
- Redux (Data Flow)
- ES6 / ES7 standards
- Webpack with Babel (Script bundling with ES6/7 transpile)
- Sass (With node-sass, Webpack Sass loader)
- Mocha, Expect.js (Test suite for UI components)

## Installation
Node 4+, NPM 3+ is highly recommended.
```
 $ npm install
```

## Build & Run
```
 $ npm start
```
Go to [localhost:8080](http://localhost:8080).

## Tests
Unit tests can be run with:
```
 $ npm test
```

## Build for Production
Bundle for production is created under `/dist` directory with:
```
 $ npm run build
```

## Data
Fake data is produced with [JSON Generator](http://beta.json-generator.com/).

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

## Assumptions
- Full names of airports includes relevant city name.
- Two way price is equal to out flight price + return flight price.
- No service fees are being charged.
- Flights are scheduled between Jun 10 2016 & Jul 20 2016.