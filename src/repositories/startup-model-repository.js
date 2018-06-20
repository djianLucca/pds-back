'use strict';

const model = require('../models');

exports.get = () => {
    return model.startup_models.findAll({
        include: [{
            model: model.startups
        },{
            model: model.activities
        },{
            model: model.pcts
        }]
    });
}

exports.getByStartup = (startupId) => {
    return model.startup_models.findAll({
        include: [{
            model: model.activities
        }],
        where: { startupId }
    });
}

exports.getById = (id) => {
    return model.startup_models.findById(id, {
        include: [{
            model: model.startups
        },{
            model: model.activities
        },{
            model: model.pcts
        }]
    });
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.startup_models.create(data, { transaction: t });
    });
}

exports.createBulk = (data) => {
    return model.sequelize.transaction((t) => {
        return model.startup_models.bulkCreate(data, {
            transaction: t,
            updateOnDuplicate: true
        });
    });
}

exports.delete = (pctId,startupId) => {
    return model.sequelize.transaction((t) => {
        return model.startup_models.destroy({ 
            transaction: t,
            where: {
                pctId: pctId,
                startupId: startupId
                }
        });
    });
}