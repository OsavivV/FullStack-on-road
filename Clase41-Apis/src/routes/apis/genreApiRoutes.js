const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/apis/genresApiController');

router.get('/', genresApiController.list);
router.get('/detail/:id', genresController.detail);


module.exports = router;