# The Phone Call

![](https://github.com/yashaswiim/the_phone_call/blob/main/assets/the_phone_call_.png)

### Group Members
* Luke
* Shamsa
* Tim
* Yashaswi

### Project Concept and Summary
<p align="justify"> 
The soundscape that we created is called “The Phone Call” because the storyline basically revolves around the use of a cellphone. This soundscape initially mimics a regular day in the life of a working-class man living in the New York City with his wife, but eventually his entire life takes a turn because he decides to take a phone call while he is driving. The story starts at the man’s home. As usual, he wakes up in the morning, gets his coffee and leaves for work in his car. But as he stops on his way to get breakfast, he gets late for work, and he starts getting phone calls one after the other. The calls distract him from the road, and he unfortunately meets with an accident. The man loses his memory after the accident and forgets even his wife in the end.
</p>
<p align="justify"> 
The idea behind this project is to capture how a regular day in someone’s life can suddenly change into their worst nightmare because of a little negligence on their side. We initially thought of making a story about someone having a bad day. However, as we played around with ideas for the script of the story, we came to a conclusion that we wanted our story to be message-oriented as well and hence, we chose to create this story about the use of cell phones while driving. We wanted to convey a message to the audience about what could happen if they use phones and are distracted while driving on the road. 
</p>

### Process and Coding 

<p align="justify"> 
Choosing the theme of the website that is appropriate to the mood of our soundscape was the most challenging part of coding. We initially designed the website to be in a simple playlist style (like that of Spotify), but we felt the website must hint to visitors that our audio is about cellphones. For this reason, we slightly modified our design so that the visitors can use the cellphone image as a play button as shown above. Using HTML and CSS, I was able to make a page that shows a smartphone with a play button. Instead of putting a play button that we see in most video players, I decided to use a headphone image to make sure visitors are aware that only sound will be played. Using Javascript, I was able to make an audio play and stop when the button is clicked. 
</p>
<p align="justify"> 
<em>Character bubbles</em> that are floating around the page while the audio is playing are solely made using Javascript. Using a Javascript feature that allows me to keep track of time in milliseconds, I made bubbles move in a random initial direction by certain pixels every 100ms and bounce off when they hit the border. Making certain bubbles appear and disappear was done by making bubbles visible or hidden at a specific time. These specific times were manually written down on the paper after the soundscape was done. I went through several trial-and-error processes to make the timing perfect.
</p>
<p align="justify"> 
In addition, we added a homescreen to our website that was designed as the lockscreen of a phone. This was done to add a little bit of foreshadow element to our website. We wanted our audience to get a kind of that the storyline revolves around a phone. On this page, we added a feature of <em>Slide to unlock</em> which was done using jQuery, jQuery UI and a bit of Javascript coding. The slider element was converted into a draggable element using jQuery UI, whose position was then continuously tracked to know when the element has been dragged far enough to consider the phone unlocked. Implementing this element was a bit of hassle because jQuery UI does not work with touchscreen devices. Hence, this feature, as of now, only works on non-touch-screen devices. For touchscreen devices, users have to directly go to the second page of the website where the soundscape lives. Adding features such that the <em>Slide to unlock</em> works on touchscreen devices as well would be a good way to extend this project later.  
</p>

### Sound recording and effect

<p align="justify"> 
Tim, Yashaswi, and Shamsa came up with the idea and wrote the script, which included the sound effects and ambience our group wanted to have. Then I carried on making it. We recorded 2 takes of the script in the Soundstage (room 025) using the H4N recorder that we were given access to by the Equipment Center. Although the room in which we recorded was in complete silence (ie. no AC sound and no other people besides us), we realized that the sound quality of the recordings were not super clear; there was some static in the them, which could be an error pertaining to the H4N recorder. I had to therefore used the Noise Reduction feature in Audacity to remove this static, by experimenting with different combinations of parameters. I also applied the Pitch Changing effect to the Radio Reporter voice and the Narrator voice to make them sound as if they are from different characters. Moreover, I also used EQ to create the radio effect for the radio reporter voice. 
</p>
<p align="justify"> 
The sound mixing and designing was the most enjoyable part. Because most of the sounds required for our sound story could not be recorded easily as they demand professional foley work, I decided to look for royalty-free, copyright-free sound effects and ambience online, especially on Youtube. Then I created/sketched out an assembly on Davinci Resolve (just to ease the workflow as there were so many layers of sound), consisting of multiple layers of sound including the original recording and the sound effects + ambience. Going through multiple drafts as I incorporated Tim, Yashaswi, and Shamsa's suggestions into the mixing, I shifted things around, chose where to start and where to end the sound effects and ambience, and if needed to, I created new sound effects from the files I had. Towards the ending, I used Reverb to add make the character Joe's coughing echo as if we are in a big room to hopefully make the effect more jarring and impactful. The soundscape then ends with the poignant piano music and gradually fades out. 
</p>
Again, the entire mixing is completed based on the script we had in the beginning.

### Design and Conclusion

<p align="justify"> 
On the first page, we placed a phone to make the audience wonder why we chose to do that, this will be revealed later on in the story. After the sliding effect of the phone, the user would be brought to the second page. For the character images, we made them look like bubbles so that they could float around the screen. Since the images had movement across the screen already, we made the background a simple color, red. This is because we wanted to make sure that the user would not get too distracted as they listened to the audio. This could potentially lead to losing focus on the storyline which is something we definitely wanted to avoid doing. We chose the color red because this color represents a sign of danger or warning, and that is a message we wanted to convey to the audience. The colors of the characters are also bold, we made the color scheme that way in the website because we wanted to show that this story will be empowering and portray something important. We matched the color scheme by using the background, bubbles, and the phone display as well.
</p>
<p align="justify"> 
In conclusion, we have crossed through many stages in this sound project starting from thinking about the story, writing out the script and the character's lines, recording the sound, adding the effects, editing the sound into the effect, developing the website with CSS, HTML, and JavaScript, then finally finalizing the website with the sound audio. Even though all these stages took a lot of group meeting, individual tasks etc it was worth it in the end because of how we put all of the elements together in a group work form. Working in a group helps to lsiten to different ideas and collaborate with problem solving and sharing ideas. For example, we actually had a couple of ideas for the storyline but with our group discussions and reasons, we decided to stick the story line we did and we are proud that we did because the output we created is something that we are all proud of.
</p>

* [Website (For non-touch-screen devices)](https://yashaswiim.github.io/the_phone_call)
* [Website (For touchscreen devices)](https://yashaswiim.github.io/the_phone_call/audioscreen.html)
