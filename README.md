## Available Scripts

In the project directory, you can run:

### `npm init`

Installs all project **dependencies** on your local machine

### `npm run dev`

Runs the app in the development mode.

The page will reload if you make edits.
You will also see concise loggings colored by response status in the console.

### `npm run start`

Runs the app in the production mode.

## Exercise Description:

### Routing

- [ ] create a router for each- Item, List and User resources
- [ ] create full crud routes and create placeholder controllers
- [ ] mount router on the root server

### Create Schemas

- [ ] create a schema for each= Item, List and User resources
- [ ] add some validations (wherever required)
- [ ] add compound index (if required)

### Controllers

Hook up all the routes to models and perfom CRUD operations on different models.

### Authentication

Lock down API using JWT's.

- [ ] create a signup controller
- [ ] create a signin controller
- [ ] create a protect middlware to securelock down API routes

**Try creating a generic controller to handle all the different resources**