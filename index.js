const express = require('express');
require('dotenv').config();

const app = express();

const firebase = require('firebase/app');

const morgan = require('morgan');

app.use(morgan('dev'));

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

firebase.initializeApp(firebaseConfig);

const port = process.env.PORT || 4000;
const indexRoute = require('./routes/index');
const articleRouter = require('./routes/article');
const createArticleRouter = require('./routes/createArticle');
const help = require('./routes/help');

app.use('/', indexRoute);
app.use('/article', articleRouter);
app.use('/create', createArticleRouter);
app.use('/help', help);
app.get('/:anything', (req, res) => {
  const url = req.params.anything;
  res.json({
    error: ` /${url} is not valid url. Please Enter a valid url. For help visit /help`,
  });
});

app.listen(port, () => {
  console.log(`Started listening at port ${port}`);
});
