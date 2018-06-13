'use strict';

const model = require('../models');

exports.get = () => {
    return model.pcts.findAll({
        include: [{
            attributes: [
                "id",
                "email",
                "personId"
            ],
            model: model.users,
            include: [{
                model: model.people
            }]
        }]
    });
}

exports.getById = (id) => {
    return model.pcts.findById(id, {
        include: [{
            attributes: [
                "id",
                "email",
                "personId"
            ],
            model: model.users,
            include: [{
                model: model.people
            }]
        }]
    });
}

exports.getByUserId = (id) => {
    return model.pcts.findOne({
        include: [{
            attributes: [
                "id",
                "email",
                "personId",
                "is_admin"
            ],
            model: model.users,
            include: [{
                model: model.people
            }]
        }],
        where: {userId: id}
    });
}

exports.create = (data) => {
    return model.sequelize.transaction((t) => {
        return model.pcts.create(data, {
            transaction: t,
            include: [{
                model: model.users,
                include: [{
                    model: model.people
                }]
            }]
        });
    });
}

exports.update = (id, data) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(pct => {
            if (!pct) return pct;

            return pct.user
                .updateAttributes(data.user, { transaction: t })
                .then(user => {
                    return user.person
                        .updateAttributes(data.user.person, { transaction: t })
                        .then(person => pct.update(data, { transaction: t }));
                });
        });

    });
}

exports.delete = (id) => {
    return model.sequelize.transaction((t) => {
        return this.getById(id)
        .then(pct => {
            if (!pct) return pct;

            return pct.user.person
                .destroy({ transaction: t });
        });

    });
}