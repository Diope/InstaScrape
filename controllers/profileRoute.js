const express = require('express');
var profileRoutes = express.Router();

profileRoutes.route('/').get(function (req, res) {
    // Instagram profile
    res.render('index');
});

module.exports = profileRoutes;
