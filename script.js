var endpoint = "https://en.wikipedia.org/w/api.php"; //Base Url for making an API request. It's essentially the homepage of the API.
var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&origin=*&list=search&srsearch="; //The final url before it is called in an ajax request.
var articleUrl = "http://en.wikipedia.org/?curid=";
var searchText;
var title1;
var title2;
var title3;
var title4;
var title5;
var title6;
var title7;
var title8;
var title9;
var title10;
var subtitle1;
var subtitle2;
var subtitle3;
var subtitle4;
var subtitle5;
var subtitle6;
var subtitle7;
var subtitle8;
var subtitle9;
var subtitle10;
var link1;

function searchWiki() {
  searchText = $("#userInput").val();
  $("#userInput").val('');
  searchText = searchText.replace(" ", "&");
  var finalUrl = searchUrl + searchText;
  console.log(searchText);
  console.log(finalUrl);
  $.ajax({
    url: finalUrl,
    success: function(data) {
      console.log("Wikipedia API ajax request was a success");
      title1 = data.query.search[0].title;
      subtitle1 = data.query.search[0].snippet;
      link1 = articleUrl + data.query.search[0].pageid;
      title2 = data.query.search[1].title;
      subtitle2 = data.query.search[1].snippet;
      link2 = articleUrl + data.query.search[1].pageid;
      console.log(title1);
      console.log(link1);
      $(".card-title1").empty();
      $(".card-title2").empty();
      $(".card-subtitle1").empty();
      $(".card-subtitle2").empty();
      $(".card-title1").append(title1);
      $(".card-title2").append(title2);
      $(".card-subtitle1").append(subtitle1 + "...");
      $(".card-subtitle2").append(subtitle2 + "...");

    }
  });
}
document.getElementById("userInput").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    e.preventDefault();
  }
};

$.fn.extend({ //function that makes it easy to do animations
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault(); //Disables the form from being submitted
    $("#userInput").animate({ //animates the search box
      marginTop: "1.5%",
      height: "35px",
      fontSize: "18px",
    }, 1000);
    searchWiki();
    document.querySelector(".card").style.display = "block"; //makes the card not hidden
    $(".card").animateCss("fadeInLeft"); //makes the card fade in left
    setTimeout(function() {
      document.querySelector("#card2").style.display = "block";
      $("#card2").animateCss("fadeInLeft");
    }, 200);
    setTimeout(function() {
      document.querySelector("#card3").style.display = "block";
      $("#card3").animateCss("fadeInLeft");
    }, 300);
    setTimeout(function() {
      document.querySelector("#card4").style.display = "block";
      $("#card4").animateCss("fadeInLeft");
    }, 400);
    setTimeout(function() {
      document.querySelector("#card5").style.display = "block";
      $("#card5").animateCss("fadeInLeft");
    }, 500);

    setTimeout(function() {
      document.querySelector("#card6").style.display = "block";
      $("#card6").animateCss("fadeInLeft");
    }, 600);
    setTimeout(function() {
      document.querySelector("#card7").style.display = "block";
      $("#card7").animateCss("fadeInLeft");
    }, 700);
    setTimeout(function() {
      document.querySelector("#card8").style.display = "block";
      $("#card8").animateCss("fadeInLeft");
    }, 800);
    setTimeout(function() {
      document.querySelector("#card9").style.display = "block";
      $("#card9").animateCss("fadeInLeft");
    }, 900);
    setTimeout(function() {
      document.querySelector("#card10").style.display = "block";
      $("#card10").animateCss("fadeInLeft");
    }, 1000);

  }
});

function cardLink1() {
  window.open(link1, '_blank');
}
