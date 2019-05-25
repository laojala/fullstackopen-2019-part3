# Node.JS phonebook app

Repository contains Node.js backend for a simple phone book. Data is stored to a MongoDB Database.

Phone book service is hosted at:  
<https://cryptic-peak-59110.herokuapp.com/>

Backend shows data also at:   
<https://cryptic-peak-59110.herokuapp.com/api/persons>
<https://cryptic-peak-59110.herokuapp.com/info>

## To run the service locally

First, install dependencies:

```bash
npm i
```

To start service locally (uses [Nodemon](https://github.com/remy/nodemon), that automatically restarts node when changes are saved):

```bash
npm run watch
```

Repository contains frontend build. Frontend can be accessed at <http://localhost:3001/>

## Deployment to Heroku

### Preparing deployment

Create database (for instance to [MongoDB Atlas cloud](https://www.mongodb.com/cloud/atlas)). Place database uri to a file `.env`.

Then create Heroku project within the repository:

```bash
heroku create
```

And add database uri to the Heroku:

```bash
heroku config:set MONGODB_URI=mongodb+srv://__your_uri_here__
```

### Deployment

To deploy to the Heroku, run:

```bash
npm run deploy
```

## Frontend

Frontend build is included in this repository. If you want to make changes to the frontend, fork code from: <https://github.com/laojala/fullstackopen-2019/tree/master/chapter_2/phone_book>

Then configure `build:ui` parameter in the file `fullstackopen-2019-part3-node/package.json` to point to the frontend repository.

To build UI and start the whole project, run:

```bash
npm run locally
```
