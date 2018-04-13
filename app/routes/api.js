var express = require('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var formData = require('../data/data.json');
var fs = require('fs');
//bodyParser Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/api', function(req, res){
    res.json(formData);
});


router.post('/api', function(req, res){
    formData.unshift(req.body);
    fs.writeFile('app/data/data.json', JSON.stringify(formData), 'utf8',
function(err){
    if(err){
        console.log(err);
    }
});
    res.json(formData);
});

router.delete('/api/:id', function(req, res){
    formData.splice(req.params.id, 1);
    fs.writeFile('app/data/data.json', JSON.stringify(formData), 'utf8',
function(err){
    if(err){
        console.log(err);
    }
});
    res.json(formData);
});


module.exports = router;