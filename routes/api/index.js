//allowing API to be scalable

const router = require('express').Router();
//collecting packaaged group of API endpoints
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

//prefixes w/ /users; /posts
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

//packaged up routes to be used in Server.Js
module.exports = router;