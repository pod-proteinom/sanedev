const conf = require('config');
const Koa = require('koa');

const app = new Koa();
const database = require('common/database');
app.listen(conf.server.port, () => {
  // log.info(`Server listening on ${conf.server.port}`);
});