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
      title3 = data.query.search[2].title;
      subtitle3 = data.query.search[2].snippet;
      link3 = articleUrl + data.query.search[2].pageid;
      title4 = data.query.search[3].title;
      subtitle4 = data.query.search[3].snippet;
      link4 = articleUrl + data.query.search[3].pageid;
      title5 = data.query.search[4].title;
      subtitle5 = data.query.search[4].snippet;
      link5 = articleUrl + data.query.search[4].pageid;
      title6 = data.query.search[5].title;
      subtitle6 = data.query.search[5].snippet;
      link6 = articleUrl + data.query.search[5].pageid;
      title7 = data.query.search[6].title;
      subtitle7 = data.query.search[6].snippet;
      link7 = articleUrl + data.query.search[6].pageid;
      title8 = data.query.search[7].title;
      subtitle8 = data.query.search[7].snippet;
      link8 = articleUrl + data.query.search[7].pageid;
      title9 = data.query.search[8].title;
      subtitle9 = data.query.search[8].snippet;
      link9 = articleUrl + data.query.search[8].pageid;
      title10 = data.query.search[9].title;
      subtitle10 = data.query.search[9].snippet;
      link10 = articleUrl + data.query.search[9].pageid;
      console.log(title1);
      console.log(link1);
      $(".card-title1").empty();
      $(".card-title2").empty();
      $(".card-subtitle1").empty();
      $(".card-subtitle2").empty();
      $(".card-title3").empty();
      $(".card-subtitle3").empty();
      $(".card-title4").empty();
      $(".card-subtitle4").empty();
      $(".card-title5").empty();
      $(".card-subtitle5").empty();
      $(".card-title6").empty();
      $(".card-subtitle6").empty();
      $(".card-title7").empty();
      $(".card-subtitle7").empty();
      $(".card-title8").empty();
      $(".card-subtitle8").empty();
      $(".card-title9").empty();
      $(".card-subtitle9").empty();
      $(".card-title10").empty();
      $(".card-subtitle10").empty();
      $(".card-title1").append(title1);
      $(".card-title2").append(title2);
      $(".card-subtitle1").append(subtitle1 + "...");
      $(".card-subtitle2").append(subtitle2 + "...");
      $(".card-title3").append(title3);
      $(".card-subtitle3").append(subtitle3 + "...");
      $(".card-title4").append(title4);
      $(".card-subtitle4").append(subtitle4 + "...");
      $(".card-title5").append(title5);
      $(".card-subtitle5").append(subtitle5 + "...");
      $(".card-title6").append(title6);
      $(".card-subtitle6").append(subtitle6 + "...");
      $(".card-title7").append(title7);
      $(".card-subtitle7").append(subtitle7 + "...");
      $(".card-title8").append(title8);
      $(".card-subtitle8").append(subtitle8 + "...");
      $(".card-title9").append(title9);
      $(".card-subtitle9").append(subtitle9 + "...");
      $(".card-title10").append(title10);
      $(".card-subtitle10").append(subtitle10 + "...");
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
