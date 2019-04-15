
const merge = require('lodash').merge;

module.exports = {
  createOne: (model, body) => {
    return model.create(body);
  },

  updateOne: (docToUpdate, update) => {
    merge(docToUpdate, update);
    return docToUpdate.save();
  },

  deleteOne: (docToDelete) => {
    return docToDelete.remove();
  },

  getOne: (docToGet) => {
    return Promise.resolve(docToGet);
  },

  getAll: (model, userId) => {
    // Pass user id. Show all only for the passed logged in user
    return model.find({ userId });
  },

  findById: (model, id) => {
    return model.findById(id);
  }
};

