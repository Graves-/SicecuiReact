var express = require('express');
var router = express.Router();

/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dertl4ng53f2v3', 'gjxtxjecfbowmd', '0d4052516a0e2be497c951be2e287cc701c1414c73752f4d2d7a9f96b7af470a', {
    host: 'ec2-50-19-105-188.compute-1.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

sequelize.sync().then(() => User.create({
  username: 'Ecks Dee',
  birthday: new Date(1980,6,20)
})).then(Ecks => {
  console.log(Ecks.toJSON());
});
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
