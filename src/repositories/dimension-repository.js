'use strict';

const model = require('../models');

exports.get = () => {
    return model.dimensions.findAll();
}

exports.getById = (id) => {
    return model.dimensions.findById(id);
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.dimensions.create(data, { transaction: t });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(dimension => {
            dimension.update(data, { transaction: t })
        });
    });
}

exports.delete = (id) => {
    return model.dimensions.destroy({ where: { id: id }})
}