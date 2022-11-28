var express = require('express');
var router = express.Router();

var myAlbumsController = require('../controllers/MyAlbumsController')

router.get('/myalbums', myAlbumsController.index);
router.get('/', (req, res) => {
  res.redirect('/myalbums')
});
router.get('/myalbums/:id', myAlbumsController.getOneAlbums)
router.get('/myalbums/:id/photos/:photoId', myAlbumsController.getOnePhoto)

module.exports = router;