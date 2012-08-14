#Sparkle Turntable Bot

A customizable Turntable.fm bot written in node.js utilizing [ttapi](https://github.com/alaingilbert/Turntable-API).

This project is no longer in development. If you have new features or bugfixes, feel free to submit a pull request.

## Installation

    npm install sparklebot

Check out the new [Get Started guide](https://github.com/sharedferret/Sparkle-Turntable-Bot/wiki/Get-Started) over on the project's [Wiki page](https://github.com/sharedferret/Sparkle-Turntable-Bot/wiki) for detailed installation instructions.

## Features

This bot is written in Node.JS and utilizes Alain Gilbert's Turntable API.

The bot can: 

* Respond to a set of commands in chat and through turntable's PM system
* Awesome songs based on various systems
* Log vote, chat, song, and room events in the console
* Report song stats in chat after each song
* Welcome users to the room via chat and PM
* Enforce room rules regarding song limits and timeouts before a person can DJ again
* Log song statistics and chat entries in a MySQL database
* Receive and respond to commands via a HTTP RESTful API
* Manage a waitlist/queue for a room
* Keep track of the mood and/or theme of a room (set by admins)

## Help

Feel free to contact me anytime via [twitter](http://twitter.com/besublime).
* mood, .mood, themood - returns the current mood of the room (set by admins)

* theme, .theme, thetheme - returns the current theme of the room (set by admins)

(these are all currently disabled, as the waitlist functionality is turned off for this particular instance of this bot)
(also currently disabled, see above)
* .q - Tells the bot to snag the current song (add to the bot's queue).


* setmood [mood] - sets the mood of the room

* settheme [theme] - sets the theme of the room