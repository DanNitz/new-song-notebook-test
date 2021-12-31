# new-song-notebook-test
 Song Writing and Storage App

 Restarting my project from the beginning - To better understand the basics of APIs and functionality.

 This time around I am going to work on scalabilty, starting smaller. Build a skateboard first instead of a rocketship. MVP style. 

Overall Summary:
 This will be a Song Writing app to create, organize, save, and edit songs. I would also like to implement a display format for the songs that will be clean and easy to read as if I were using these as reference sheets for gigs (say a dark bar, or poorly lit stage). So in essence, I aim to make the information easy to store, save, edit, and display in a way that is intuitive to playing a fast paced gig in a less than optimal setting. Also I am not proficient in sheet music as with most of the musicians I play with, so this will be a great way to help give my fellow bandmates and myself a quick frame of reference for our songs.

 Currently Operational --
 Get All Songs & Set 1-5 Buttons

 Getting the app Started:
 1. Navigate into the new-song-test folder 'cd new-song-test'
 2. then run 'npm install' to install dependencies
 3. then run 'npm run open' to load the songlibrary.html in browser
 4. then run 'npm start' to get the app/server up and running


 My Feature list requirement checklist:
 1. Read and parse an external file (such as JSON) into my application and display the data in my app.
 2. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application.
 3. Create a web server with at least one route and connect to it from my application using ExpressJS
 4. I also created multiple custom functions to get songs by specific set lists and displaying all songs and handling my xhr requests
 
 My steps through designing this project:
 1. Get the API and server running to display a list of my songs from songs.json
 2. Add a functions that will search out a particular song by its id, set, tuning, cover or original (co), and or name
 3. Add an insert method to be able to input new songs
 4. Add a router put and update method to update our constantly changing songs
 5. Add a delete method/endpoint to delete songs
 6. Add the patch method to be able to update partial data (will be most important feature in my case!)
 7. Add my Song library page to begin GET on Songs  
 8. npm install cors package and configuration 
 9. Work on xhr requests for getAllSongs() and getSet()
 10. Work on my displayAllSongs() using a while loop and forEach

My Goals for the next phase(s) of this project:
 1. Get Originals and Cover Buttons working
 2. Begin working on a Form Input Pages for adding, editing, updating, and deleting songs
 3. Begin adding the sections for (pre)/& verse, (pre)/& chorus, bridge, solo, interlude, outro etc... 

My lofty goals for down the road
 1. Connect this app functionality to an accessible database for storing
 2. Have user and admin roles (adding and editing vs. viewing and arranging set lists) and to different databases depending on the band I am adding the song for
 3. Have an offline storage/viewing option
 4. Each new song doesn't always have the same structure, so something more to the effect of being able to add the input fields as I go depending on each new song.
 5. Have a chord img library/db so when I hover over a chord in a song I can see the different fingerings (guitar,piano wise etc...)
 6. A Transpose feature based on incrementing +1,-1 (by half steps) that will automatically change all the chords in the song respectively
 7. Datestamps/logs for when songs were originally created and edited for record keeping
 8. Add a dark/light format toggle switch

Thanks for checking out my project!


 

