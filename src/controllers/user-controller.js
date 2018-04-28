'use strict';
const bcrypt = require('bcrypt');

const repository = require('../repositories/user-repository');
const pctRepository = require('../repositories/pct-repository');
const auth = require('../middlewares/auth');

exports.get = async (req, res, next) => {
    try{
        const data = await repository.get()
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.getById = async (req, res, next) => {
    try{
        const id = req.params._id;
        const data = await repository.getById(id);

        if(!data)throw new Error("Wasn't possible to find this user.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataToCreate = req.body;
        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this user.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try{
        const dataToUpdate = req.body;
        const id = req.params._id;

        const data = await repository.update(id, dataToUpdate);

        if(!data)throw new Error("Wasn't possible to update this user.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const id = req.params._id;

        const data = await repository.delete(id);

        if(!data)throw new Error("Wasn't possible to delete this user.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.auth = async (req, res, next) => {
    try{
        const userRequest = req.body;
        const userInstance = await repository.getByEmail(userRequest.email);
        const user = userInstance.get({ plain: true });

        if(!user)throw new Error("Wasn't possible to find this .");

        const passwordRequest = bcrypt.hashSync(userRequest.password, user.salt);
        const match = passwordRequest === user.password;
        
        if(!match)throw new Error("Invalid login.");

        const pctInstance = await pctRepository.getByUserId(user.id);
        const pctPlain = pctInstance.get({ plain: true})
        
        if(!pctPlain)throw new Error("Wasn't possible to find this pct.");

        const token = await auth.generateToken(pctPlain);

        res.json({
            token: token,
            data: pctPlain
        });
    }catch(error){
        next(error);
    }
}