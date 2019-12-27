const { userCreate } = require('../controllers/user.controller');
const router = require('express').Router();

//router.get('/signin/form', signinForm);
router.post('/', userCreate);

module.exports = router;