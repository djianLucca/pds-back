'use strict';

const model = require('../models');

exports.get = () => {
    return model.smm_models.findAll({
        include: [{
            model: model.pcts
        }]
    });
}

exports.getByPct = (pctId) => {
    return model.smm_models.findAll({
        where: { pctId },
        include: [{
            model: model.pcts
        }]
    });
}

exports.getById = (id) => {
    return model.smm_models.findById(id, {
        include: [{
            model: model.pcts
        }]
    });
}

exports.create = (data) => {
    return model.smm_models.create(data);
}

exports.update = (id, data) => {
    return model.smm_models.update(data, { where: { id: id }})
}

exports.delete = (id) => {
    return model.smm_models.destroy({ where: { id: id }})
}