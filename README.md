How to Install & Run for Development
--

Use stable version of nodejs v.16.16

1. Install npm packages
`npm install`
2. Run it on you local environment `npm run dev`


Migrate Databases
1. Install knex globally `npm install knex -g`
2. Run it on you local environment `knex migrate:make your_migration_filename -x ts` 