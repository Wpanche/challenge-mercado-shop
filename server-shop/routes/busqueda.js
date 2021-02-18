var express = require('express');
var search = require('../external_service/serach_service')
var router = express.Router();

/* GET users listing. */
router.get('/items', async (req, res, next) => {
    var data = await search.searchProduct(req.query.q)
    res.firmarJson(data);

});


router.get('/items/:id', async (req, res, next) => {
    var data = await search.Item(req.params.id)
    res.firmarJson(data);
});


module.exports = router;
