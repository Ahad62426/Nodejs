var express = require('express');
var router = express.Router();

router.get('/files', function(req, res){
    res.render('files', {
        pageTitle: 'Files Page'
    });
});

module.exports = router;