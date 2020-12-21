const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const dashboardRoutes = require('./dashboard-routes.js');

const apiRoutes = require('./api');

//prefixes routes with " ", "dashboard," "api"
router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);
//requested endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});


//to log out after idle
global.onload = function () {
  inactivityTime();
}

var inactivityTime = function () {
  var time;
  global.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
    alert("You are now logged out.")
    document.location.replace('/logout');
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 3000)
    // 1000 milliseconds = 1 second
  }
};

module.exports = router;