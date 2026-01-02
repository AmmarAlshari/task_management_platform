export default () => ({
  database: {
    type: process.env.DATABASE_TYPE,
    port: parseInt(<string>process.env.DATABASE_PORT, 10) || 3306,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_TABLE,
  },
});
