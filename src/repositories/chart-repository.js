'use strict';

const model = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.get = (startupId, is_done) => {
    const queryIsDone = is_done ? 'AND sm.is_done = true' : '';
    return model.activities.findAll({
        attributes: [
            [sequelize.fn("count", sequelize.col("activities.id")), "total"],
        ],
        include: [
            {
                attributes: ['name'],
                model: model.phases
            },
            {
                attributes: ['name'],
                model: model.dimensions
            },
        ],
        where: {
            id: {
                [Op.in]: sequelize.literal(`(SELECT ap.activityId FROM startup_models as sm INNER JOIN action_plans as ap ON sm.actionPlanId = ap.id WHERE sm.startupId = "${startupId}" ${queryIsDone} AND sm.priority < 3)`)
            }
        },
        group: ['phaseId', 'dimensionId']
    });
}