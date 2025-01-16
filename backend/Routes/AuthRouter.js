const {signup,login} = require('../Controllers/AuthController')
const {signupValidation,loginValidation} = require('../Middlewares/AuthValidation')

const router = require('express').Router();

router.post('/login', loginValidation, login )
router.post('/signup', signupValidation, signup )
router.post('/register', signup);
module.exports = router;