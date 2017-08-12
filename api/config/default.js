const path = require('path');
const dirname = path.dirname;
const rootDir = dirname(__dirname);
const srcDir = path.join(rootDir, 'src');
const modulesDir = path.join(srcDir, 'modules');
const env = process.env;
module.exports = {
  server: {
    port: 8080
  },
  database: {
    uri: `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@database:5432/${env.POSTGRES_DB}`,
    options: {
      dialect: 'postgres',
      define: {
        underscored: true
      }
    }
  },
  dirs : {
    src: srcDir,
    modules: modulesDir
  }
}