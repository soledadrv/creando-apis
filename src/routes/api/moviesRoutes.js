const express = require('express');
const router = express.Router();
const { create, destroy } = require('../../controllers/api/moviesController');


router.post('/movies/create', create);

router.delete('/movies/delete/:id', destroy);


module.exports = router;