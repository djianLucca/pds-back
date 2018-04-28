'use strict';
const repository = require('../repositories/pct-repository');
const bcrypt     = require('bcrypt'); 

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

        if(!data)throw new Error("Wasn't possible to find this pct.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const body = req.body;

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(body.user.password, salt);

        const dataToCreate = {
            name: body.name,
            user: {
                email: body.user.email,
                password: password,
                salt: salt,
                person: {
                    name: body.user.person.name
                }
            }
        }    

        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this pct.");
        
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

        if(!data)throw new Error("Wasn't possible to update this pct.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const id = req.params._id;

        const data = await repository.delete(id);

        if(!data)throw new Error("Wasn't possible to delete this pct.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}