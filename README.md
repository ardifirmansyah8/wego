# React + Vite + TypeScript + Vitest Project

This is a modern development setup using Vite for fast development, TypeScript for type safety, and Vitest for unit testing. This project serves as a template to quickly get started with a front-end development environment optimized for React (or other frameworks) with unit tests.

## Features

- Vite for fast bundling and development
- TypeScript for type safety and better tooling
- Vitest for fast and easy unit testing
- React

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (>= 14.x.x)
- npm or yarn package manager

## Installation

Follow these steps to get the project up and running on your local machine.

1. Clone the repository.
2. Install the dependencies:

```js
yarn install
```

## Development

### Starting the Development Server

To run the app in development mode, simply run:

```js
yarn dev
```

This will start a development server with HMR (Hot Module Replacement) enabled, and you can access your app at http://localhost:5173/.

### Building the Project

To create a production build of the project, run:

```js
yarn build
```

This will create an optimized build in the dist/ folder.

### Preview the Production Build

To preview the production build locally, run:

```js
yarn preview
```

## Running Tests

This project uses Vitest for unit testing. To run the tests, simply execute:

```js
yarn test
```

By default, this will run all the tests in the project. Vitest will automatically watch for changes and rerun the tests if needed.

To gather coverage of test, execute:

```js
yarn coverage
```
