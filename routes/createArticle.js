const express = require('express');

const router = express.Router();

const form = `
<h1>Create Form</h1>
<form action='create/submit'>
<div style="display:flex; flex-direction:column; max-width:325px">
<label for "articleTitle"></label>
<input type='text' name ='articleTitle' placeholder='type article title...'/>
<label for "articleText"></label>
<input type='text' name ='articleText' placeholder='type article text...'/>
<label for "author"></label>
<input type='text' name ='author' placeholder='type the author name...'/>
</div>
<button type="Submit">Submit Article</button>
</form>`;

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/', (req, res) => {
  res.send(form);
});

router.get('/submit', (req, res) => {
  const queryParams = req.query;
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const { author } = queryParams;

  const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();

  const setBlogPost = firestore.setDoc(firestore.doc(db, 'blogposts', idFromTitle), {
    title,
    text,
    author,
  });
  setBlogPost.then(() => {
    res.send(`<h1>Submission Successful</h1>
    <p><a href="/create"> Add another post</a>
    </p>`);
  }).catch((err) => {
    console.log(err);
    res.send(`Error when submitting ${err.toString()}`);
  });
});

module.exports = router;
