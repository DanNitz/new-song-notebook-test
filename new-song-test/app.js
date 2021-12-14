//bring in the express server and create the application 
const express = require('express');
const app = express();
const songRepo = require('./repos/songRepo');

//use the express router object for endpoints
const router = express.Router();


//create GET to return a list of all pies
router.get('/', function (req, res, next) {
    songRepo.get(function(data){
    res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "All songs retrieved.",
        "data": data
    });
    }, function(err){
        next(err);
    });
});

//configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//last thing to do to get server running - create server to listen on port 5000
const server = app.listen(5000, function (){
    console.log('Node server is running on http://localhost:5000..');
});