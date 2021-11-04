const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

// const blogposts = db('blogposts');

router.get('/', (req, res) => {
  const blogposts = firestore.getDocs(firestore.collection(db, 'posts'));
  const blogpostArray = [];
  blogposts
    .then((response) => {
      // console.log('---------------------------------------');
      // console.log(response);
      // console.log('---------------------------------------');
      response.forEach((doc) => {
        blogpostArray.push(doc.data());
      });
      return res.send(blogpostArray);
    })
    .catch((error) => {
      console.log('Error:', error);
      return res.send(error);
    });
});

module.exports = router;
