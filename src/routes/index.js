const router = require('express').Router();
const auth = require('../middlewares/auth');

router.use('/login',            require('../controllers/user-controller').auth);
router.use('/pct',              require('./pct-route'));
router.use('/startup',          require('./startup-route'));
router.use('/area',             require('./area-route'));
router.use('/user',             require('./user-route'));
router.use('/action-plan',      require('./action-plan-route'));
router.use('/activity',         require('./activity-route'));
router.use('/activity-type',    require('./activity-type-route'));
router.use('/dimension',        require('./dimension-route'));
router.use('/phase',            require('./phase-route'));
router.use('/smm-model',            require('./smm-model-route'));

module.exports = router;