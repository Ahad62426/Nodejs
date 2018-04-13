var express = require('express');
var router = express.Router();

router.get('/data', function(req, res){
    res.render('data', {
        pageTitle: 'Data Page',
        pageID: 'data'
    });
});


module.exports = router;