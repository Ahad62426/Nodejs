var express = require('express');
var router = express.Router();

router.get('/form', function(req, res){
    res.render('form', {
        pageTitle: 'Form Page',
        pageID: 'form'
    });
});

router.post('/form', function(req, res){
    res.render('success', {
        pageTitle: 'Success Page'
    });
});

module.exports = router;