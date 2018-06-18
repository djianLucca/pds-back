'use strict';
const repository = require('../repositories/activity-repository');

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

        if(!data)throw new Error("Wasn't possible to find this activity.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.getByPhase = async (req, res, next) => {
    try{
        const phaseId = req.params._phaseId;
        const data = await repository.getByPhase(phaseId);

        if(!data)throw new Error("Wasn't possible to find this activity.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataToCreate = req.body;
        const dataCreated = await repository.create(dataToCreate);

        if(!dataCreated)throw new Error("Wasn't possible to create this activity.");

        const data = await repository.getById(dataCreated.id);
        
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

        if(!data)throw new Error("Wasn't possible to update this activity.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const id = req.params._id;

        const data = await repository.delete(id);

        if(!data)throw new Error("Wasn't possible to delete this activity.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}