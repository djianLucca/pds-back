'use _idict';
const repository = require('../repositories/smm-model-repository');
const actionPlanRepository = require('../repositories/action-plan-repository');

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

exports.getByPct = async (req, res, next) => {
    try{
        const pctId = req.params._pctId;
        const data = await repository.getByPct(pctId);

        if(!data)throw new Error("Wasn't possible to find this pct.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try{
        const dataFromClient = req.body;
        const activities = dataFromClient.activitiesIds;

        const dataToCreate = {
            name: dataFromClient.name,
            pctId: req.decoded.id
        }

        const createdSmmModel = await repository.create(dataToCreate);

        if(!createdSmmModel)throw new Error("Wasn't possible to create this model.");

        const actionPlans = activities.map(activity => {
            return {
                activityId: activity,
                smmModelId: createdSmmModel.id
            }
        });

        const data = actionPlanRepository.createBulk(actionPlans);

        if(!createdSmmModel)throw new Error("Wasn't possible to create this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try{
        const dataToUpdate = req.body;
        const smmModelId = req.params._id;

        const data = await repository.update(smmModelId, dataToUpdate);

        if(!data)throw new Error("Wasn't possible to update this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const smmModelId = req.params._id;

        const dataActionPLans = await actionPlanRepository.deleteBySmmModel(smmModelId);
        if(!dataActionPLans)throw new Error("Wasn't possible to delete this model.");

        const data = await repository.delete(smmModelId);

        if(!data)throw new Error("Wasn't possible to delete this model.");
        
        res.json(data);
    }catch(error){
        next(error);
    }
}
