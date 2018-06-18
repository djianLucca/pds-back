'use strict';
const repository = require('../repositories/startup-repository');

exports.get = async (req, res, next) => {
    try{
        const data = await repository.get()
        res.json(data);
    }catch(error){
        next(error);
    }
}   

exports.getByPct = async (req, res, next) => {
    try{
        const pctId = req.decoded.id;
        const data = await repository.getByPct(pctId)
        res.json(data);
    }catch(error){
        next(error);
    }
}   

exports.getById = async (req, res, next) => {
    try{
        const id = req.params._id;
        const data = await repository.getById(id);

        if(!data)throw new Error("Wasn't possible to find this startup.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataToCreate = req.body;
        dataToCreate.pctId = req.decoded.id;
        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this startup.");
        
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

        if(!data)throw new Error("Wasn't possible to update this startup.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const id = req.params._id;

        const data = await repository.delete(id);

        if(!data)throw new Error("Wasn't possible to delete this startup.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}