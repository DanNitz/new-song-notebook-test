const fs = require('fs');

const FILE_NAME = './assets/songs.json';

//my get and get by id functions within my songRepo variable
let songRepo = {
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
    }
};

module.exports = songRepo;