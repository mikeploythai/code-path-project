# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Mike Ploythai**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/best-quill-tv

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Used Google Fonts API to use Poppins font
- [X] Used CSS transitions

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

    "Simple Counter | JavaScript Beginner Project Tutorial" by learn-webdev - https://www.youtube.com/watch?v=-BWKWHE5rI4
    
    "CSS Button On Hover Slide Effect" by RazorXio - https://codepen.io/RazorXio/pen/gMaoOW
    
    "acmCSUF Mock Website" by Me - https://github.com/mikeploythai/acmCSUF


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    The largest challenge I had was when I was customizing the game to my liking.  I spent a long time figuring out why the entire body wasn't centering to the middle of the 
    page even though I was using things like flex and inline-block for my display parameter, and using text-align, align-items, and justify-content.  I spent a good 40 minutes 
    to an hour trying out different things to get it to center, but then I remembered I had a problem similar to this when I was creating the mock up website for acmCSUF, the 
    largest tech organization at my university that I'm a part of.  I had this issue when I was trying to create the hamburger menu UI for the website's mobile view.  I 
    immediately went to my repo, and found the answer to all of my problems: flex-direction.  I knew that in the beginning of this issue, I was taking the right path using 
    display: flex for the body, but never remember any of the other cool commands and parameters I have access to with flex, such as flex-direction.  So finally, I set my flex-
    direction to column, and then set my justify-content to center, which resulted on all of the assets in the body centering to the browser's viewport.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    The only question I have about web development after doing my project is if whether or not developers would have to remember everything in a real work environment.  Because 
    there are so many cool things people can do with HTML, CSS, JavaScript, Svelte, SASS, and others, I find it very difficult to remember every command or trick that I can do 
    with these languages to do exactly what I want.  I would have to resort to Google, YouTube, or previous projects a lot in order to develop exactly what I want.  I wonder if 
    it's taboo at all to search up the things that you don't remember during programming.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

    If I had all the time in the world to keep working on this project, the first simple thing I would look into is creating a loading bar splash screen just as a cool aesthetic 
    thing to add to the website.  Next, I would look into creating text displaying if the play has won or loss rather than having a browser prompt popping up and alerting them 
    of such result.  After, I'd like to implement the other optional things in the README that I didn't have the time to implement, such as speeding up time and adding multiple 
    sounds; in fact, the multiple sound one intrigued me the most because I am a musician in real life, and understand chords and such.  However, I've never working with audio 
    in programming ever, so this would be my first foray into that.  Unfortunately, I have an SQL midterm that I have to get to, so maybe I'll look into that on my own time.


## License

    Copyright Mike Ploythai 2021

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
