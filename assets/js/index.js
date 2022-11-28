var img = document.getElementsByClassName("thumbnail-img");

function openImg(id, albumId) {
  document.getElementsByClassName('big-photo')[0].style.display = "block";
  var generateUrl = "https://jsonplaceholder.typicode.com/albums/"+ albumId +"/photos/?id="+ id;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", generateUrl);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if ((this.status == 200) && (this.status < 300)) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById('big-photo').src = response[0].url
        var img = document.getElementById("big-photo").src 
      }
    }
  }
}
