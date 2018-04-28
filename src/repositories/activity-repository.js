'use strict';

const model = require('../models');

exports.get = () => {
    return model.activities.findAll({
        include: [{
            model: model.phases
        },{
            model: model.dimensions
        },{
            model: model.activities_types
        }]
    });
}

exports.getById = (id) => {
    return model.activities.findById(id, {
        include: [{
            model: model.phases
        },{
            model: model.dimensions
        },{
            model: model.activities_types
        }]
    });
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.activities.create(data, { transaction: t });
    });
}

exports.createBulk = (data) => {
    return model.sequelize.transaction((t) => {
        return model.activities.bulkCreate(data, { transaction: t });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(activity => {
            if (!activity) return activity;

            return activity.update(data, { transaction: t })
        });
    });
}

exports.delete = (id) => {
    return model.activities.destroy({ where: { id: id }})
}