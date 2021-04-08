const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaInvoice = new Schema({
    ireference: { type: String, required: true },
    idate: {type: Date, required: true},
    businesspartner: { type: String, required: true },
    reason: { type: String, required: true },
    agreement: { type: String, required: true },
    amount: {type: Number, required: true},
    currency: {type: String, required: true, length: 3}
});

const modelInvoice = mongoose.model('invoice', schemaInvoice);

module.exports = modelInvoice;
