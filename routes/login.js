var express = require('express');
var router = express.Router();
var loginController = require('../controllers/LoginController')

router.get('/', loginController.index);
router.post('/', loginController.auth);


module.exports = router;