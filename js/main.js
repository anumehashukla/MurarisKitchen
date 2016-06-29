	var firstLoad =0;
$( document).ready(function() {
    console.log( "ready!" );
});

$(window).bind("load", function() {
if(window.location.hash ==''){
	setTimeout(setHeight, 1000);
    homeClick();
}
else if(window.location.hash =='#home'){
	setTimeout(setHeight, 0);
	homeClick();
}
else if(window.location.hash =='#menu'){
	setTimeout(setHeight, 0);
	menuClick();
}
else if(window.location.hash =='#contact'){
	setTimeout(setHeight, 0);
	contactClick();
}
});

function setHeight(){

var headerDivheight= $("#div-header").height();
headerDivheight = headerDivheight/6;
$("#div-header").css("height", headerDivheight);
var headerDivWidth = $("#div-header").width();

$("h1").css( "fontSize", "500%" );
$("h1").css( "text-align", "center");
$("h1").css( "font-weight", "100");

var headingWidth = $("h1").width();
var headingHeight = $("h1").height();
var headerLeft = (headerDivWidth - headingWidth)/2;
var headerTop = (headerDivheight - headingHeight)/2;

$("h1").css( "top", headerTop);
$("h1").css( "left", headerLeft);

$("#div-nav").css('top',headerDivheight);
};




$(window).on('hashchange', function() {

  if(window.location.hash ==''){
  	homeClick();
  }
  else if(window.location.hash =='#home'){
  	homeClick();
  }
    else if(window.location.hash =='#menu'){
  	menuClick();
  }
  else if(window.location.hash =='#contact'){
  	contactClick();
  }
});



function homeClick(){
	$("#div-subContainer").load("home");
	//return false;
};

function aboutClick(){};
function menuClick(){
	$("#div-subContainer").load("menu");
	return false;
};
function contactClick(){
	$("#div-subContainer").load("contact", initMap);
	return false;
};

function initMap() {
		  var contactDivWidth = $("#div-contactDetails").css('width');
		  var contactDivHeight = $("#div-contactDetails").css('height');
		  var borderWidth = 10;
		  var mapWidth = parseInt($("#div-subContainer").css('width')) - parseInt(contactDivWidth) - borderWidth; 
		  $("#div-map").css('width', mapWidth+'px');
		  $("#div-map").css('height', contactDivHeight);
          var mapDiv = document.getElementById('div-map');
         
          var map = new google.maps.Map(mapDiv, {
              center: {lat: 28.519979, lng: 77.201370},
              zoom: 16
          });

          var marker = new google.maps.Marker({
    			position: {lat: 28.519979, lng: 77.201370},
    			map: map,
    			title: 'Hello World!'
  		  });
  		  marker.setMap(map);
};

function mailSendBtnClicked(){
	var name = document.getElementById('name');
	var subject = document.getElementById('subject');
	var email = document.getElementById('email');
	var message = document.getElementById('input-messageTextBox');

};
function sandwichClick(){
   $("#div-Sandwich").css('visibility', 'visible');

   $("#div-Salad").css('visibility', 'hidden');
   $("#div-Pasta").css('visibility', 'hidden');
   $("#div-Burger").css('visibility', 'hidden');
   $("#div-Pizza").css('visibility', 'hidden');
   $("#div-Drinks").css('visibility', 'hidden');

};
function saladClick(){
   $("#div-Salad").css('visibility', 'visible');

   $("#div-Sandwich").css('visibility', 'hidden');
   $("#div-Pasta").css('visibility', 'hidden');
   $("#div-Burger").css('visibility', 'hidden');
   $("#div-Pizza").css('visibility', 'hidden');
   $("#div-Drinks").css('visibility', 'hidden');
};
function pastaClick(){
   $("#div-Pasta").css('visibility','visible');

   $("#div-Sandwich").css('visibility', 'hidden');
   $("#div-Salad").css('visibility', 'hidden');
   $("#div-Pizza").css('visibility', 'hidden');
   $("#div-Burger").css('visibility', 'hidden');
   $("#div-Drinks").css('visibility', 'hidden');
};


function pizzaClick(){
   $("#div-Pizza").css('visibility', 'visible');

   $("#div-Sandwich").css('visibility', 'hidden');
   $("#div-Salad").css('visibility', 'hidden');
   $("#div-Pasta").css('visibility', 'hidden');
   $("#div-Burger").css('visibility', 'hidden');
   $("#div-Drinks").css('visibility', 'hidden');
};

function burgerClick(){
   $("#div-Burger").css('visibility', 'visible');

   $("#div-Sandwich").css('visibility', 'hidden');
   $("#div-Salad").css('visibility', 'hidden');
   $("#div-Pasta").css('visibility', 'hidden');
   $("#div-Pizza").css('visibility', 'hidden');
   $("#div-Drinks").css('visibility', 'hidden');
};
function drinksClick(){
   $("#div-Drinks").css('visibility', 'visible');


   $("#div-Sandwich").css('visibility', 'hidden');
   $("#div-Salad").css('visibility', 'hidden');
   $("#div-Pasta").css('visibility', 'hidden');
   $("#div-Pizza").css('visibility', 'hidden');
   $("#div-Burger").css('visibility', 'hidden');
};

