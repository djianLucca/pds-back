'use strict';
const repository = require('../repositories/dimension-repository');

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

        if(!data)throw new Error("Wasn't possible to find this dimension.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataToCreate = req.body;
        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this dimension.");
        
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

        if(!data)throw new Error("Wasn't possible to update this dimension.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const id = req.params._id;

        const data = await repository.delete(id);

        if(!data)throw new Error("Wasn't possible to delete this dimension.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}