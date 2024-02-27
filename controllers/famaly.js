const Famaly = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const { userNotFound } = require('../utils/constants');

const createFamaly = (req, res, next) => {
  const { userId, name } = req.body;
  Famaly.create({
    userId,
    name,
  })
    .then((famaly) => res.status(201).send(famaly))
    .catch(next);
};

const getFamlyInfo = (req, res, next) => {
  Famaly.findById(req.famaly._id)
    .orFail(new NotFoundError(userNotFound))
    .then((famaly) => res.send(famaly))
    .catch(next);
};

// const changeUserInfo = (req, res, next) => {
//   const newUserInfo = req.body;
//   User.findByIdAndUpdate(
//     req.user._id,
//     newUserInfo,
//     { new: true, runValidators: true },
//   )
//     .orFail(new NotFoundError(userNotFound))
//     .then((user) => res.send(user))
//     .catch(next);
// };

module.exports = {
  getFamlyInfo,
  // changeUserInfo,
  createFamaly,
};
