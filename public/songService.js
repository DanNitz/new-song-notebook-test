'use strict'
//api url
const URL ="http://localhost:5000/api/";

//xhr request to get api and call for my displayAllSongs()
function getAllSongs() {
    console.log("GET ALL");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response);
            let songsArr = response.data;
            console.log(songsArr);
            displayAllSongs(songsArr);        
        }
    };
    req.open("GET", URL);
    req.send();
}

//xhr request and function getting my specific set lists
function getSet(setNumber){
    console.log("GET Specific SET SONGS");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response);
            let songsArr = response.data.filter(function(song){
                if(song.set === setNumber){
                    return true;
                }
                else {
                    return false;
                }
            });
            console.log(songsArr);
            displayAllSongs(songsArr);        
        }
    };
    req.open("GET", URL);
    req.send();
}

//xhr request and function getting originals vs. covers
function getOriginalsOrCovers(originalOrCover){
    console.log("GET Original or Cover Songs");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response);
            let songsArr = response.data.filter(function(song){
                if(song.co === originalOrCover){
                    return true;
                }
                else {
                    return false;
                }
            });
            console.log(songsArr);
            displayAllSongs(songsArr);        
        }
    };
    req.open("GET", URL);
    req.send();
}

//check debug on dev tools for scope reference
//breakpoints on dev tools is a good way for me to visualize what is going on
//my displayAllSongs function 
function displayAllSongs(songsArr){
   let listElement = document.getElementById('song-display');

    while(listElement.lastElementChild){
        listElement.removeChild(listElement.lastElementChild);
    }

   songsArr.forEach(function(song){
    //each element is inside of container variable
    //create elements, add context, append to dom
    let container = document.createElement("div");
    let name = document.createElement("h1");
    let set = document.createElement("h3");
    let tuning = document.createElement("p");
    let co = document.createElement("h3");
    let intro = document.createElement("div");
    let br = document.createElement("br");

    name.innerText = song.name;
    set.innerText = song.set;
    tuning.innerText = song.tuning;
    co.innerText = song.co;
    intro.innerText = song.intro;

    container.append(name, set, co, tuning, intro, br);
    listElement.append(container);

   });

}

/** 
 * MY notes for reference:
 * my data lives in the in xhr request response.data
 * then put that in a songArr variable
 * then i pass my songArr into displayAllSongs()
 * using the forEach will create an new element whether it be a div,ul,li etc..
 * then i can put those elements like name,set,tuning,co, and intro into my 
 * container variable
 * 
 * 
 * Then in my getSet function, I can reuse my displayAllSongs() call
 * pass setNumber as a parameter in getSet(setNumber)
*
*/


