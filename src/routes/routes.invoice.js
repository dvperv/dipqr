const controller = require('../controllers/controller.invoice')

module.exports = (app) => {
    // create a meta
    app.post('/api/invoice', controller.create);

    // get the list of metas
    app.get('/api/invoice', controller.fetch);

    // get a single meta
    app.get('/api/invoice/:id', controller.get);

    // update a meta
    app.put('/api/invoice/:id', controller.update);

    // delete a meta
    app.delete('/api/invoice/:id', controller.delete);
}
