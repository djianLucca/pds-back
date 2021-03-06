const router     = require('express').Router();
const controller = require('../controllers/startup-model-controller');
const auth       = require('../middlewares/auth');

router.get('/:_startupId',             auth.auth, controller.getByStartup);
// router.get('/:_id',                 auth.auth, controller.getById);
// router.get('/startup/:_startupId',  auth.auth, controller.getByStartup);
router.post('/:_startupId',            auth.auth, controller.create);
// router.put('/:_id',                 auth.auth, controller.update);
// router.delete('/:_id',              auth.auth, controller.delete);

module.exports = router;