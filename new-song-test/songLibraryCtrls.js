//Dom Objects
const allSongsBtn = document.querySelector(".all-songs");
const originalsBtn = document.querySelector(".originals");
const coversBtn = document.querySelector(".covers");
const set1Btn = document.querySelector(".set-1");
const set2Btn = document.querySelector(".set-2");
const set3Btn = document.querySelector(".set-3");
const set4Btn = document.querySelector(".set-4");
const set5Btn = document.querySelector(".set-5");
const otherSongsBtn = document.querySelector(".other-songs");


//const for my api to pull from 
const url = "http://localhost:5000/api/";

//functions

/** 
 * 
 * Get allSongsBtn click
 * 
*/

const showAllSongs = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Song API Data:");
            const { }
    
        })
}

/** 
 * 
 * Get originalsBtn click
 * 
*/

const showOriginals = () => {}

/** 
 * 
 * Get coversBtn click
 * 
*/

const showCovers = () => {}

/** 
 * 
 * Get set1Btn click
 * 
*/

const showSet1 = () => {}

/** 
 * 
 * Get set2Btn click
 * 
*/

const showSet2 = () => {}

/** 
 * 
 * Get set3Btn click
 * 
*/

const showSet3 = () => {}

/** 
 * 
 * Get set4Btn click
 * 
*/

const showSet4 = () => {}

/** 
 * 
 * Get set5Btn click
 * 
*/

const showSet5 = () => {}

/** 
 * 
 * Get otherSongsBtn click
 * 
*/

const showOtherSongs = () => {}

/* ***************
 * Event Listeners  
*/

allSongsBtn.addEventListener('click', showAllSongs);
originalsBtn.addEventListener('click', showOriginals);
coversBtn.addEventListener('click', showCovers);
set1Btn.addEventListener('click', showSet1);
set2Btn.addEventListener('click', showSet2);
set3Btn.addEventListener('click', showSet3);
set4Btn.addEventListener('click', showSet4);
set5Btn.addEventListener('click', showSet5);
otherSongsBtn.addEventListener('click', showOtherSongs);

