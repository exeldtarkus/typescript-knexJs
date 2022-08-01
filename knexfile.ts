import type { Knex } from "knex";
import {paymentDB} from "./src/app/config/database_config";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      user: paymentDB.username,
      host: paymentDB.host,
      database: paymentDB.db,
      password: paymentDB.password,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
