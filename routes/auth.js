const router = require('express').Router();
const { celebrate, Segments } = require('celebrate');
const { createUser, signIn, signOut } = require('../controllers/user');
const { signupValid, signinValid } = require('../utils/validationopt');

router.post('/signup', celebrate({
  [Segments.BODY]: signupValid,
}), createUser);

router.post('/signin', celebrate({
  [Segments.BODY]: signinValid,
}), signIn);

router.post('/signout', signOut);

module.exports = router;
