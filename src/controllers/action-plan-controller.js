'use strict';
const repository = require('../repositories/action-plan-repository');

// exports.get = async (req, res, next) => {
//     try{
//         const data = await repository.get()
//         res.json(data);
//     }catch(error){
//         next(error);
//     }
// }

exports.getByStartup = async (req, res, next) => {
    try{
        const startupId = req.params._startupId;
        const data = await repository.getById(startupId);

        if(!data)throw new Error("Wasn't possible to find this action plan.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.getBySmmModelId = async (req, res, next) => {
    try{
        const smmModelId = req.params._smmModelId;
        const dataFromDb = await repository.getBySmmModelId(smmModelId);

        if(!dataFromDb)throw new Error("Wasn't possible to find this action plan.");

        const activities = dataFromDb.map(actionPlan => actionPlan.activity);
        
        res.json(activities);
    }catch(error){
        next(error);
    }
}

exports.getActionPlansBySmmModelId = async (req, res, next) => {
    try{
        const smmModelId = req.params._smmModelId;
        const data = await repository.getBySmmModelId(smmModelId);

        if(!data)throw new Error("Wasn't possible to find this action plan.");
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataToCreate = req.body;
        const data = await repository.create(dataToCreate);

        if(!data)throw new Error("Wasn't possible to create this action plan.");
        
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

        if(!data)throw new Error("Wasn't possible to update this action plan.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const startupId = req.params.str;

        const data = await repository.delete(startupId);

        if(!data)throw new Error("Wasn't possible to delete this action plan.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}
