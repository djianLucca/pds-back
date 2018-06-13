'use strict';
const repository = require('../repositories/smm-model-repository');

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
        const dataToCreate = req.body;
        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try{
        const dataToUpdate = req.body;
        const startupId = req.params.str;

        const data = await repository.update(startupId, dataToUpdate);

        if(!data)throw new Error("Wasn't possible to update this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const startupId = req.params.str;

        const data = await repository.delete(startupId);

        if(!data)throw new Error("Wasn't possible to delete this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}
