'use strict';

const model = require('../models');

exports.get = () => {
    return model.activities_types.findAll();
}

exports.getById = (id) => {
    return model.activities_types.findById(id);
}

exports.create = (data) => {
    return model.activities_types.create(data);
}

exports.update = (id, data) => {
    return model.activities_types.update(data, { where: { id: id }})
}

exports.delete = (id) => {
    return model.activities_types.destroy({ where: { id: id }})
}