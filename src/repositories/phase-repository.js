'use strict';

const model = require('../models');

exports.get = () => {
    return model.phases.findAll({order: [['order', 'ASC']]});
}

exports.getById = (id) => {
    return model.phases.findById(id);
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.phases.create(data, { transaction: t });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(phase => {
            phase.update(data, { transaction: t })
        });
    });
}

exports.delete = (id) => {
    return model.phases.destroy({ where: { id: id }})
}