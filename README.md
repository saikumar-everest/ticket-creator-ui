# ticket-creator-ui

A simple UI to create tickets into some ticket managers like, freshdesk, zendesk, etc

### Pre-requisites to run the application

1. Create a `.env` file from `env.sample` file in root folder, and add all the required environment variables.

### How to run application?

1. Install project dependencies.
   `yarn`
2. Build UI and serve
   `yarn ui:build & yarn ui:serve`
   UI should be accessed at http://localhost:9000

### How to run application for development?

1. Install project dependencies.
   `yarn`
2. Watch and serve UI
   `yarn ui:dev`
   UI should be accessed at http://localhost:8000

### How to run unit tests?

    `yarn test`

We run few pre-commit hooks for safety of code.
