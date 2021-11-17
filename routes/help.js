const express = require('express');

const router = express.Router();
 

router.get('/', (req, res) => {

   res.json({help: '/ - to view all the data. /article/articleid - to view particular article pertaining to the id. /create - to create a new article'})
});

module.exports = router;
