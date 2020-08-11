const router = require('express').Router();

const apiRoutes = require('./api');
//prefixes routes with "api"
router.use('/api', apiRoutes);
//requested endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;