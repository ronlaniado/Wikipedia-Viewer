var endpoint = "https://en.wikipedia.org/w/api.php"; //Base Url for making an API request. It's essentially the homepage of the API.
var searchUrl; //The final url before it is called in an ajax request.

function searchWiki() {
  $.ajax({

  });
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    $("#userInput").animate({
      marginTop: "1.5%",
      height: "35px",
      fontSize: "18px",
    }, 800);
    console.log("test");
  }
});
