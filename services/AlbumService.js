const superagent = require("superagent");

var baseUrl = "https://jsonplaceholder.typicode.com/albums/" 

module.exports = {
  getAlbums: async function () {
    try {
      const res = await superagent.get(
        baseUrl
      );
      return res.body;
    } catch (err) {
      return err.message
    }
  },

  getAlbum: async function (albumId) {
    try {
      var generateUrlLimit = "?_start=0&_limit=8";
      var generateUrl = baseUrl + albumId + "/photos" + generateUrlLimit
      const res = await superagent.get(
        generateUrl
      );
      return res.body;
    } catch (err) {
      return err.message
    }
  },

  // getPhoto: async function(albumId, photoId) {
  //   $(document).ready(function () {
  //     var generateUrl = baseUrl + albumId + "/photos?id=" + photoId;
  //     $.ajax({
  //       url: generateUrl,
  //       type: "GET",
  //       success: function (result) {
  //         console.log(result);
  //       },
  //       error: function (error) {
  //         console.log(`Error ${error}`);
  //       }
  //     });
  //   });
  // }
};
