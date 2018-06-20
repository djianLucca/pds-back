const router     = require('express').Router();
const controller = require('../controllers/action-plan-controller');
const auth       = require('../middlewares/auth');

// router.get('/', controller.get);
router.get('/:_startupId',          auth.auth, controller.getByStartup);
router.get('/model/:_smmModelId',   auth.auth, controller.getBySmmModelId);
router.get('/startup/:_smmModelId', auth.auth, controller.getActionPlansBySmmModelId);
router.post('/:_startupId',         auth.auth, controller.create);
router.put('/:_startupId',          auth.auth, controller.update);
router.delete('/:_startupId',       auth.auth, controller.delete);

module.exports = router;