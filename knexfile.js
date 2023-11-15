/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      user: 'annhochworter',
      password: 'null',
      database: 'study-haul-2',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      // ssl: {
      //   sslmode: 'require',
      // },
      // port: 5432,
      // host: 'ep-dawn-hill-07407845.us-east-1.postgres.vercel-storage.com',
      // user: 'default',
      // password: 'RlFApE53SLkM',
      // database: 'verceldb',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
