# Batt Leroy al

## Project Structure

```
    .
    +-- tailwind.config.js : Tailwind Config
    +-- public
    |   +-- index.html
    |   +-- index.css
    +-- src
    |   +-- index.tsx
    |   +-- app.tsx
    |   +-- config
    |   |   |   +-- ApolloClient.ts : Apollo Client setup
    |   |   |   +-- app.routes.ts : Routes Array
    |   +-- pages
    |   |   +-- My Page
    |   |   |   +-- index.tsx
    |   |   |   +-- Other Components or Function Helpers that this Page depends on
    |   +-- shared
    |   |   |   +-- utils.ts : Shared Helper Functions
    |   |   |   +-- queries.ts : GraphQL Queries
    |   |   |   +-- ui
    |   |   |   |   +-- Here you put UI kit Components
    |   |   |   +-- components
    |   |   |   |   +-- Here you put Shared Components
    |   |   |   +-- Other Helpers
```

## Todos

- Add Subscription Support
- Create the UI Kit
