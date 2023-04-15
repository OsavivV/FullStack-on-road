const express = require('express');
const router = express.Router();
const moviesApisController = require('../../controllers/apis/moviesApiController');

router.get(' ', moviesApisController.list);
router.get('/detail/:id', moviesApisController.detail);
router.post(' ' , moviesApisController.create);
router.delete('/:id' , moviesApisController.delete);

// router.get('/movies/new', moviesController.new);
// router.get('/movies/recommended', moviesController.recomended);
//Rutas exigidas para la creación del CRUD
// router.get('/movies/add', moviesController.add);
// router.post('/movies/create', moviesController.create);
// router.get('/movies/edit/:id', moviesController.edit);
// router.put('/movies/update/:id', moviesController.update);
// router.get('/movies/delete/:id', moviesController.delete);
// router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;