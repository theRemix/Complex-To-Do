const { join } = require('path')
const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 3000

fastify.register(require('fastify-static'), {
  root: join(__dirname, 'build'),
})

fastify.register(require('./api/todos'), { prefix: '/api/todos' })

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
