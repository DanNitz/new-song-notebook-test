'use strict'

const URL ="http://localhost:5000/api/";

function getAllSongs() {
    console.log("GET ALL");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response);
            let songsArr = response.data;
            console.log(songsArr);
            // console.log(response.status);
            // console.log(response.data);
            // console.log(response.data[3]);
            // console.log(response.data.length);
            displayAllSongs(songsArr);        
        }
    };
    req.open("GET", URL);
    req.send();
}
//getting Specific Set songs
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
            // console.log(response.status);
            // console.log(response.data);
            // console.log(response.data[3]);
            // console.log(response.data.length);
            displayAllSongs(songsArr);        
        }
    };
    req.open("GET", URL);
    req.send();
}
//check debug on dev tools for scope reference
// 
//display all songs function 

function displayAllSongs(songsArr){
   let listElement = document.getElementById('song-display');

    while(listElement.lastElementChild){
        listElement.removeChild(listElement.lastElementChild);
    }

   songsArr.forEach(function(song){
    //each element is inside of container variable
    //create elements, add context, append to dom
    let container = document.createElement("div");
    let name = document.createElement("h4");
    let set = document.createElement("div");
    let tuning = document.createElement("div");
    let co = document.createElement("div");
    let intro = document.createElement("div");

    name.innerText = song.name;
    set.innerText = song.set;
    tuning.innerText = song.tuning;
    co.innerText = song.co;
    intro.innerText = song.intro;

    container.append(name, set, tuning, co, intro);
    listElement.append(container);

   });



}



/** 
 * my data lives in the above response.data? try it
 * using a forEach that will create an new element whether it be a div,ul,li etc..
 * 
 * Get allSongsBtn click
 *
 * write a function that accepts an array of songs and sets them into the dom
    create an element then append that element to another  

 finding the div that we what put into
 then create a new element, set content for additoional subelement to put that into the 

 songArr.forEach(function (song) {
     
 })
*
*/


