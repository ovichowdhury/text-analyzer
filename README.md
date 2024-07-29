## Text Analyzer Demo App

### Database

Prisma ORM has been used. Default configuration support Postgresql Database.

### Setting up the application

1. Install Postgres Database (i.e Postgres v15).
2. Create a database in Postgres (ex. textdb).
3. Create a .env file with variable PORT & DATABASE_URL (ex. checkout .env.example).
4. Run the migration commands for database migration.

### Database migration

```bash
npm run db:migrate
npm run db:seed
```

### Run the application in dev mode

```bash
npm run start:dev
```

### Run the application for production

```bash
npm run build
npm run start:prod
```

### Run the test

```bash
npm run test
```

### Generate the test coverage report

```bash
npm run test:cov
```

### Browse the application in Swagger UI

Visit the url for browsing the application and testing the API's.

```bash
> http://127.0.0.1:3030/api (port need to changed as .env file)
```

### Log Visualization

Check the application console for request response logs
