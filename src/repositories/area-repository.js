'use strict';

const model = require('../models');

exports.get = () => {
    return model.areas.findAll();
}

exports.getById = (id) => {
    return model.areas.findById(id);
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.areas.create(data, { transaction: t });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(area => {
            area.update(data, { transaction: t })
        });
    });
}

exports.delete = (id) => {
    return model.areas.destroy({ where: { id: id }})
}