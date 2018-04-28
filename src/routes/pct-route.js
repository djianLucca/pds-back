const router     = require('express').Router();
const controller = require('../controllers/pct-controller');
const auth       = require('../middlewares/auth');

router.get('/',        auth.auth, controller.get);
router.get('/:_id',    auth.auth, controller.getById);
router.post('/',                  controller.create);
router.put('/:_id',    auth.auth, controller.update);
router.delete('/:_id', auth.auth, controller.delete);

module.exports = router;
