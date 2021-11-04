const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, 'posts', postId));

  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send('Oops');
    }).catch((error) => {
      res.send('No doc sorry', error);
    });
});

router.get('/', (req, res) => {
  res.send('Please include an ID');
});

module.exports = router;
