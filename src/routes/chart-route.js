const router     = require('express').Router();
const controller = require('../controllers/chart-controller');
const auth       = require('../middlewares/auth');

router.get('/:_startupId/:_isDone?', auth.auth, controller.get);

module.exports = router;