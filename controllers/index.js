const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

router.use('/', homeRoutes);

//prefixes routes with "api"
router.use('/api', apiRoutes);
//requested endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;