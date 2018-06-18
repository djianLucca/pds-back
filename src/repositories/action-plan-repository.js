'use strict';

const model = require('../models');

exports.get = () => {
    return model.action_plans.findAll({
        include: [{
            model: model.smm_models
        },{
            model: model.activities
        },{
            model: model.pcts
        }]
    });
}

exports.getBySmmModelId = (smmModelId) => {
    return model.action_plans.findAll({
        where: { smmModelId },
        order: [[model.activities, 'createdAt', 'ASC']],
        include: [{
            model: model.activities,
            include: [{
                model: model.phases
            },{
                model: model.dimensions
            },{
                model: model.activities_types
            }]
        }]
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

exports.delete = ( id ) => {
    return model.sequelize.transaction((t) => {
        return model.action_plans.destroy({ 
            transaction: t,
            where: { id }
        });
    });
}

exports.deleteBySmmModel = (smmModelId) => {
    return model.sequelize.transaction((t) => {
        return model.action_plans.destroy({ 
            transaction: t,
            where: { smmModelId }
        });
    });
}

