const fastify = require('fastify')({logger: true})
const mongoose = require('mongoose')
const config = require('./config')
const routesInvoicesAPI = require('./routes/routes.invoice')
const qrcode = require('./utils/qrcode.generator.util')
//connected fastify to mongoose
try {
    console.log(config.mongo)
    mongoose.connect(config.mongo, { useNewUrlParser: true,  useUnifiedTopology: true });
} catch (e) {
    console.error(e);
}

fastify.register(require('fastify-cors'), {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
})

routesInvoicesAPI(fastify)

fastify.get('/', async (request, reply) => {
    reply
        .code(200)
        .type('text/html')
        .send(`<img src=${await qrcode('http://localhost:3000/api/invoice')} alt='Dip QR Code'>`)
})

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000, (process.env.MODE_DEV == 1 ? 'localhost' : '0.0.0.0'))
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
