//allowing API to be scalable

const router = require('express').Router();
//collecting packaaged group of API endpoints
const userRoutes = require('./user-routes.js');
//prefixes w/ /users
router.use('/users', userRoutes);
//packaged up routes to be used in Server.Js
module.exports = router;