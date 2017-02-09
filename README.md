# Scout ID
Verification app for members of the scout association. 

Our prototype can be found [here](https://scout-id.herokuapp.com/). 

## Team
[Tom Lillywhite](https://github.com/tomlillywhite) - Product Owner <br>
[John Whiles](https://github.com/jwhiles) - Developer <br>
[Peter Rhodes](https://github.com/rhodespeter) - Developer

## Why?
At the latest count, the Scout Association has 89,995 members, this includes leaders, supporters, managers and administrators.
When these members take part in activities relating to the scouts association they need to prove that they are indeed a member of the Scouts Association and that their membership is still valid (hasn't been revoked, or suspended).

Currently the Scout Association provides their members with membership cards, these are not digital and revoking membership involves taking the card back from the member. This is comes with many problems and is very inefficient and costly. The Scout ID app replaces this outdated method of member validation. 

The current method of checking scout association membership does not provide the Scout Association with data about which members took part in events, this data has to be captured by other staff members which is vulnerable to human error and is time consuming. The Scout ID app will provide this information to the Scout Association. 

## Who?
Currently the most senior member of staff asks to see the membership card of a member when they take part in an event, this app will replace this procedure.

## What? 
This project wraps a Scout Association branded login page with a QR code and a results page (approved or rejected) around the Yoti digital identity software.

All Scout members will need to download the Yoti app or be provided with a NFC (near field communication) tag.

The Scout member responsible for validating the membership of other members will need to open a webpage on a computer/phone or download a QR code to validate the members. 

## Next steps
 - User testing
 - Linking the Scout ID app with the Scout Association database of members
 - Add unit testing to the project 
 
## Current tech stack & technologies needed for MVP
 - Hosting on Heroku
 - Node server with Hapi.js 
 - Yoti API
 - Tachyons
 - Handlebars
