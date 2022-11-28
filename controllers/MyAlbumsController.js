const albums = require('../services/AlbumService');

exports.index = (req, res) => {
  albums.getAlbums().then(response =>  {
    res.render('homepage', { data: response })
  })
}

exports.getOneAlbums = (req, res) => {
  params = req.params.id;
  albums.getAlbum(params).then(response => {
    console.log(response)
    res.render('homepage', { albumsPhoto: response })
  })
}

exports.getOnePhoto = (req, res) => {
  albumId = req.params.id;
  photoId = req.params.photoId
  albums.getPhoto(albumId, photoId).then(response => {
    console.log(response)
  })
}