//bring in the express server and create the application 
const express = require('express');
const app = express();
const songRepo = require('./repos/songRepo');
//const songLibCtrls = require('./songLibraryCtrls');
let cors = require('cors');

//use the express router object for endpoints
const router = express.Router();

//configure the middleware to support JSON data parsing in request object
app.use(express.json());

//configuring CORS
app.use(cors());

//create GET to return a list of all songs
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

//create GET/search?id=number&name=string to search for songs by 'id' and/or 'name'
router.get('/search', function (req, res, next) {
    let searchObject = {
        "id": req.query.id,
        "set": req.query.set,
        "tuning": req.query.tuning,
        "co": req.query.co,
        "name": req.query.name
    };

    songRepo.search(searchObject, function (data){
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All songs retrieved.",
            "data": data
        });
    }, function (err){
        next(err);
    });
});

//create a GET id to retrieve a single song by id
router.get('/:id', function (req,res,next){
    songRepo.getById(req.params.id, function (data) {
        if(data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "Single song retrieved.",
            "data": data
        });
        }
        else {
        res.status(404).json({
            "status": 404,
            "statusText": "Not Found",
            "message": "The song '" + req.params.id + "' could not be found.",
            "error": {
                "code": "NOT_FOUND",
                "message": "The song '" + req.params.id + "' could not be found."
            }
        });
        }
    }, function(err){
        next(err);
    });
});
//create a POST method in our router to add a new song
router.post('/', function (req, res, next){
    songRepo.insert(req.body, function(data){
        res.status(201).json({
            "status":201,
            "statusText": "Song Created",
            "message": "New Song Added.",
            "data": data
        });
    }, function(err){
        next(err);
    });
});
//create a router PUT and update method so we can update our songs since they get changed so often
router.put('/:id', function (req, res, next) {
    songRepo.getById(req.params.id, function (data) {
        if (data) {
            songRepo.update(req.body, req.params.id, function (data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The Song '" + req.params.id + "' has been updated!",
                    "data": data
                });
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The Song '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The Song '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function (err) {
        next(err);
    });
});
//create a router delete endpoint
router.delete('/:id', function (req, res, next) {
    songRepo.getById(req.params.id, function (data) {
        if (data){
            songRepo.delete(req.params.id, function (data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The song '" + req.params.id + "' has been deleted.",
                    "data": "Song '" + req.params.id + "' deleted."
                });
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The song '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The song '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function (err) {
        next(err);
    });
});
//adding a patch method to update partial data - will be the most useful in this song app, since our songs change all the time
router.patch('/:id', function (req, res, next){
    songRepo.getById(req.params.id, function (data) {
        songRepo.update(req.body, req.params.id, function (data){
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Song '" + req.params.id + "' has been patched",
                "data": data
            });
        });
    });
});
//configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//building an error function that works with the default express next callback with middleware
function customErrorBuilder(err){
    return {
        "status": 500,
        "statusText": "Internal Server Error",
        "message": err.message,
        "error": {
            "errno": err.errno,
            "call": err.syscall,
            "code": "INTERNAL_SERVER_ERROR",
            "message": err.message
        }
    };
}



//exception middleware configuration goes last between the (after)app.use router and (before)app.listen
app.use(function (err,req,res,next){
    res.status(500).json(customErrorBuilder(err));
});

//last thing to do to get server running - create server to listen on port 5000
const server = app.listen(5000, function (){
    console.log('Node server is running on http://localhost:5000..');
});