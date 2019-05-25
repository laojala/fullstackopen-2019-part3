# Node.JS backend

Repository contains Node.js backend and rest api for a simple phone book. Data is stored to a MongoDB Database.

Phone book service is hosted at:  
https://cryptic-peak-59110.herokuapp.com/

Backend shows data also in urls:  
https://cryptic-peak-59110.herokuapp.com/api/persons  
https://cryptic-peak-59110.herokuapp.com/info


## To use service

First, install dependencies:
```
npm i
```

To start service locally (uses [Nodemon](https://github.com/remy/nodemon), that automatically restarts node when changes are saved):
```
npm run watch
```

## Deployment to Heroku

### Preparing deployment

Create emty database (for instance to [MongoDB Atlas cloud](https://www.mongodb.com/cloud/atlas)). Place database uri to a file `.env`.

Then create Heroku project within the repository: 
```
heroku create
```
And add database uri to the Heroku:
```
heroku config:set MONGODB_URI=mongodb+srv://__your_uri_here__
```
### Deployment

To deploy to the Heroku, run:
```
npm run deploy
```

## Frontend

Frontend build is included in this repository. If you want to make changes to the frontend, fork code from: https://github.com/laojala/fullstackopen-2019/tree/master/chapter_2/phone_book

Then configure `build:ui` parameter in the file `fullstackopen-2019-part3-node/package.json` to point to the frontend repository.

To build UI and run the whole project, run:
```
npm run locally
```

