const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, 'blogposts', postId));

  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.status(200).send(post);
      return res.status(404).json({ err: 'Please enter a valid ID' });
    }).catch((error) => {
      res.send('No doc sorry', error);
    });
});

router.get('/', (req, res) => {
  res.status(404).json({ err: 'Please include an ID' });
});

module.exports = router;
