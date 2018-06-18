'use strict';

const model = require('../models');

exports.get = () => {
    return model.startups.findAll({
        include: [{
            model: model.people
        },{
            model: model.areas
        },{
            model: model.pcts
        }]
    });
}

exports.getById = (id) => {
    return model.startups.findById(id, {
        include: [{
            model: model.people
        },{
            model: model.areas
        },{
            model: model.pcts
        }]
    });
}

exports.getByPct = (pctId) => {
    return model.startups.findAll({
        where: { pctId },
        include: [{
            model: model.people
        },{
            model: model.areas
        },{
            model: model.pcts
        }]
    });
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.startups.create(data, {
            transaction: t,
            include: [{
                model: model.people
            }]
        });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(startup => {
            if (!startup) return startup;

            return startup.person
                .updateAttributes(data.person, { transaction: t })
                .then(person => startup.update(data, { transaction: t }));
        });

    });
}

exports.delete = (id) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(startup => {
            if (!startup) return startup;

            return startup.person
                .destroy({ transaction: t });
        });
    });
}