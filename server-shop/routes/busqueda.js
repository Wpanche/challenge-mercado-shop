var express = require('express');
var search = require('../external_service/serach_service')
var router = express.Router();

/* GET users listing. */
router.get('/items', function (req, res, next) {

    search.searchProduct(req.query.q,(data)=>{
        res.firmarJson(data);
    })

});


router.get('/items/:id', function (req, res, next) {
    search.Item(req.params.id,(datos)=>{

        res.firmarJson(datos);
    })
});


module.exports = router;
