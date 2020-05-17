# ticket-creator-ui

A simple UI to create tickets into some ticket managers like, freshdesk, zendesk, etc

### Pre-requisites to run the application

1. Create either `.env.development` or `.env.production` file from `env.sample` file in root folder, and add all the required environment variables.

### How to run application?

1. Create `.env.production` file and add all required environment variables.
2. Install project dependencies.
   `yarn`
3. Build UI and serve
   `yarn build & yarn serve`
   UI should be accessed at http://localhost:9000

### How to run application for development?

1. Create `.env.development` file and add all required environment variables.
2. Install project dependencies.
   `yarn`
3. Watch and serve UI
   `yarn start`
   UI should be accessed at http://localhost:8000

### How to run unit tests?

    yarn test

We run few pre-commit hooks for safety of code.
