var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/items', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/items/:id', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
