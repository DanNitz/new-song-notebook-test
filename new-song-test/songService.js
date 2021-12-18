'use strict'

const URL ="http://localhost:5000/api/";

function getAllSongs() {
    console.log("GET ALL");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.data);
            console.log(response.data.length);
        }
    };
    req.open("GET", URL);
    req.addEventListener("load", display);
    req.send();
}

function display(){
    document.getElementById('song-display').innerText = this.responseText;
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


