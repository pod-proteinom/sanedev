const {Post} = require('core/database');
const QueryBuilder = require('core/query');

const create = async (ctx, next) => {
  ctx.body = await Post.create(ctx.request.fields);
}

const readById = async (ctx, next) => {
  try {
    ctx.body = await Post.findById(ctx.params.id);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const read = async (ctx, next) => {
  const query = new QueryBuilder(ctx.query)
    .whereIn('slug')
    .includes('expand')
    .build();
  try {
    ctx.body = await Post.findAll(query);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const del = async (ctx, next) => {
  try {
    ctx.body = await Post.destroy({where: {id: ctx.params.id}});
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

module.exports = {create, readById, read, del};