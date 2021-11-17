const express = require('express');

const app = express();

const firebase = require('firebase/app');

const morgan = require('morgan');

app.use(morgan('dev'));

const firebaseConfig = {
  apiKey: 'AIzaSyDpdYrBG8rvVTiuMOYgZmm5nmSXzDpkdLg',
  authDomain: 'exercise-four-fall-2021-ss.firebaseapp.com',
  projectId: 'exercise-four-fall-2021-ss',
  storageBucket: 'exercise-four-fall-2021-ss.appspot.com',
  messagingSenderId: '93097838686',
  appId: '1:93097838686:web:a166e044779d5c6d584ccf',
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
app.get("/:anything", (req, res)=>{
  const url = req.params.anything;
  res.json({error:  ` /${url} is not valid url. Please Enter a valid url. For help visit /help`})
})

app.listen(port, () => {
  console.log(`Started listening at port ${port}`);
});
