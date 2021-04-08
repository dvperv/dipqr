const model = require('../model/model.invoice');

module.exports = {
    //# create
    create: async (request, reply) => {
        try {
            const invoice = request.body;
            const newInvoice = await model.create(invoice);
            reply.code(201).send(newInvoice);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    //#get the list
    fetch: async (request, reply) => {
        try {
            const invoices = await model.find({});
            reply.code(200).send(invoices);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    //#get a single one
    get: async (request, reply) => {
        try {
            const invoiceId = request.params.id;
            const invoice = await model.findById(invoiceId);
            reply.code(200).send(invoice);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    //#update
    update: async (request, reply) => {
        try {
            const invoiceId = request.params.id;
            const updates = request.body;
            await model.findByIdAndUpdate(invoiceId, updates);
            const updatedInvoice = await model.findById(invoiceId);
            reply.code(200).send({ data: updatedInvoice });
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    //#delete
    delete: async (request, reply) => {
        try {
            const invoiceId = request.params.id;
            const invoiceToDelete = await model.findById(invoiceId);
            await model.findByIdAndDelete(invoiceId);
            reply.code(200).send({ data: invoiceToDelete });
        } catch (e) {
            reply.code(500).send(e);
        }
    },
};
