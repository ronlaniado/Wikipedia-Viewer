var endpoint = "https://en.wikipedia.org/w/api.php"; //Base Url for making an API request. It's essentially the homepage of the API.
var searchUrl; //The final url before it is called in an ajax request.

function searchWiki() {
  $.ajax({

  });
}

$(document).keypress(function(e) { //function takes in the parameter of "e"
  if (e.which == 13) { //if user presses enter
    //do this
    console.log("test");
  }
});
