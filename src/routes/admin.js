const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');
const token = require('../utils/token');

router.get('/', adminController.Films);
router.post('/login', adminController.login);
// router.post('/details', token.authenToken, filmsController.details);
// router.get('/create', filmsController.create);
router.get('/users', adminController.viewUsers);
router.get('/:_id', adminController.details);
router.post('/store', adminController.store);
// router.delete('/:_id', filmsController.delete)
// router.get('/', filmsController.Films)

module.exports = router;
