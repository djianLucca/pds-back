'use strict';

const model = require('../models');

exports.get = () => {
    return model.users.findAll();
}

exports.getById = (id) => {
    return model.users.findById(id);
}

exports.getByEmail = (email) => {
    console.log(email);
    return model.users.findOne({where: {email: email}});
}

exports.create = (data) => {
    return model.users.create(data);
}

exports.update = (id, data) => {
    return model.users.update(data, { where: { id: id }})
}

exports.delete = (id) => {
    return model.users.destroy({ where: { id: id }})
}