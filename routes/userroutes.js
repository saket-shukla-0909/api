const express = require("express");
const router = express.Router();
const usercontrollers = require('../controllers/userscontroller')
router.get('/alluserlist', usercontrollers.alluserlist);
router.get('/singleuserlist/(:id)', usercontrollers.singleuserlist);
router.post('/registration', usercontrollers.registration);
router.put('/update/(:id)', usercontrollers.update);
router.post('/login', usercontrollers.login);
router.delete('/delete/(:id)', usercontrollers.delete);
module.exports = router;