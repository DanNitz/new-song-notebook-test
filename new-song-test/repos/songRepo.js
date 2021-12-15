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
                        p => 
                        (searchObject.id ? p.id == searchObject.id : true) &&
                        (searchObject.set ? p.set == searchObject.set : true) &&
                        (searchObject.tuning ? p.tuning.toLowerCase().indexOf(searchObject.tuning.toLowerCase()) >=0 :true) &&
                        (searchObject.co ? p.co.toLowerCase().indexOf(searchObject.co.toLowerCase()) >=0 :true) && 
                        (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true)
                    );
                }
                resolve(songs);
            }
        });
    },
    //insert a new song func
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let songs = JSON.parse(data);
                songs.push(newData);
                fs.writeFile(FILE_NAME, JSON.stringify(songs), function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(newData);
                    }
                });
            }
        });
    },
    //for updating one of our songs
    update: function (newData, id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if(err) {
                reject(err);
            }
            else {
                let songs = JSON.parse(data);
                let song = songs.find(p => p.id == id);
                if(song) {
                    Object.assign(song, newData);
                    fs.writeFile(FILE_NAME, JSON.stringify(songs), function(err){
                        if(err) {
                            reject(err);
                        }
                        else {
                            resolve(newData);
                        }
                    });
                }
            }
        });
    },
    //to delete a song
    delete: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data){
            if (err) {
                reject(err);
            }
            else {
                let songs = JSON.parse(data);
                let index = songs.findIndex(p => p.id ==id);
                if (index != -1) {
                    songs.splice(index, 1);
                    fs.writeFile(FILE_NAME, JSON.stringify(songs), function (err){
                        if(err){
                            reject(err);
                        }
                        else {
                            resolve(index);
                        }
                    });
                }
            }
        });
    }
};

module.exports = songRepo;