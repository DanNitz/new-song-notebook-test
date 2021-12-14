const fs = require('fs');

const FILE_NAME = './assets/songs.json';

//my get and get by id functions within my songRepo variable
let songRepo = {
    //get func
    get: function (resolve,reject){
        fs.readFile(FILE_NAME, function (err,data){
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    //get by id func
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let song = JSON.parse(data).find(p => p.id == id);
                resolve(song);
            }
        });
    },
    //search func which has a case insensitive in filter
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if(err) {
                reject(err);
            }
            else {
                let songs = JSON.parse(data);
                if (searchObject) {
                    songs = songs.filter(
                        p => (searchObject.id ? p.id == searchObject.id : true) &&
                        (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true));
                }
                resolve(songs);
            }
        });
    }
};

module.exports = songRepo;