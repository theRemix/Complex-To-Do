const { Todo } = require('../models')

const list = async (request, reply) => {
  return await Todo.list()
}

const create = async (request, reply) => {
  return await Todo.create(request.body)
}

const read = async (request, reply) => {
  return await Todo.read(request.params.id)
}

const update = async (request, reply) => {
  return await Todo.modify(request.params.id, request.body)
}

const destroy = async (request, reply) => {
  return await Todo.destroy({ where: { id: request.params.id }})
}

module.exports = function (fastify, opts, done) {
  fastify.get('/', list)
  fastify.post('/', create)
  fastify.get('/:id', read)
  fastify.put('/:id', update)
  fastify.delete('/:id', destroy)
  done()
}
