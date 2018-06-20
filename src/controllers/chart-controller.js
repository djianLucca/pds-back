'use strict';
const repository = require('../repositories/chart-repository');

exports.get = async (req, res, next) => {
    try{
        const id = req.params._startupId;
        const isDone = req.params._isDone || false;
        const data = await repository.get(id, isDone);

        if(!data)throw new Error("Wasn't possible to find this chart.");

        res.json(data);
    }catch(error){
        next(error);
    }
}
