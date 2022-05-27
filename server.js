// from: https://www.fastify.io/

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// In-memory request counter (per instance)
let count = 0

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world', count: count++ }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()