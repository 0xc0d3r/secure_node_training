const model = require('./fees.model');
const queries = require('../../util/queries');

// Throws error if any
const fetchOrCreateFeesDoc = async () => {
    let feesDoc = await model.find();
    if (feesDoc.length === 0) {
        feesDoc = await model.create({}); // use defaults
        return feesDoc;
    } else {
        return feesDoc[0];
    }
};

exports.update = async (req, res, next) => {
    try {
        let doc = await fetchOrCreateFeesDoc();
        doc = await queries.updateOne(doc, req.body);
        res.status(201).json(doc);
    } catch (err) {
        next(err);
    }

};

exports.get = async (req, res, next) => {
    try {
        const doc = await fetchOrCreateFeesDoc();
        res.status(200).send(doc);
    } catch (err) {
        next(err)
    }
};
