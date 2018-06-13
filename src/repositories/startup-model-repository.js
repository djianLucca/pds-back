'use strict';

const model = require('../models');

exports.get = () => {
    return model.action_plans.findAll({
        include: [{
            model: model.startups
        },{
            model: model.activities
        },{
            model: model.pcts
        }]
    });
}

exports.getByPctId = (pctId) => {
    return model.action_plans.findAll({
        include: [{
            model: model.startups
        },{
            model: model.activities
        }],
        where: {pctId : id}
    });
}

exports.getById = (id) => {
    return model.action_plans.findById(id, {
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
        return model.action_plans.create(data, { transaction: t });
    });
}

exports.createBulk = (data) => {
    return model.sequelize.transaction((t) => {
        return model.action_plans.bulkCreate(data, {
            transaction: t,
            updateOnDuplicate: true
        });
    });
}

exports.delete = (pctId,startupId) => {
    return model.sequelize.transaction((t) => {
        return model.action_plans.destroy({ 
            transaction: t,
            where: {
                pctId: pctId,
                startupId: startupId
                }
        });
    });
}