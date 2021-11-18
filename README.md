# Dynamic-Web-Fall-2021-Exercise-Four

## Creating an API

1. A deployed Node app, using firebase database

## Configuring Firestore
 ```
 
require('dotenv').config();

const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

firebase.initializeApp(firebaseConfig);

 ```
 ## Boilerplate for displaying all the data from a particular collection
 
```
 
const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/', (req, res) => {
  const blogposts = firestore.getDocs(firestore.collection(db, 'collectionName'));
  const blogpostArray = [];
  blogposts
    .then((response) => {
       ...
      }); 
    })
    .catch((error) => {
      ...
    });
});

module.exports = router;
```

## Boilerplate for reading a data based on an id
```
 
const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, 'collectionName', postId));

  blogpost
    .then((response) => {
      ...
    }).catch((error) => {
      ...
    });
});
 
module.exports = router;

```

## Boilerplate for writing to the db

```
const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/submit', (req, res) => {
  const queryParams = req.query;
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const { author } = queryParams;

  const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();

  const setBlogPost = firestore.setDoc(firestore.doc(db, 'collectionName', idOfThePost), {
    data
    ...
  });
  setBlogPost.then(() => {
    ...
  }).catch((err) => {
    ...
  });
});

module.exports = router;

```

## References

_Note:_ Focus on "web" instead of Node for this project. Node will take you deeper into the Google Cloud Platform (which is more secure and scalable but outside of the scope for this exercise)

[Deploying Node to Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

[Firebase Setup in JavaScript](https://firebase.google.com/docs/web/setup?authuser=0)

[Firebase Config Object](https://firebase.google.com/docs/web/setup?authuser=0#config-object)

[Firestore Get Started](https://firebase.google.com/docs/firestore/quickstart)

[Firebase Read & Write Data](https://firebase.google.com/docs/firestore/query-data/get-data)

[Firebase Set Data](https://firebase.google.com/docs/firestore/manage-data/add-data)

[MDN - Node Forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms)

 
