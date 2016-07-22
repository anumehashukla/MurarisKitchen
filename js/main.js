	var firstLoad =0;
  var pageState;
  var isMobile = false; //initiate as false
$( document).ready(function() {
    console.log( "ready!" );
});

$(window).bind("load", function() {
if(window.location.hash ==''){
  pageState ='';
	setTimeout(checkDevice, 1000, pageState);

}
else if(window.location.hash =='#home'){
  pageState  ="#home";
	setTimeout(checkDevice, 1000, pageState);

}

else if(window.location.hash =='#mobileHome'){
  pageState ="#mobileHome";
  setTimeout(checkDevice, 1000, pageState);

}
else if(window.location.hash =='#menu'){
  pageState ="#menu";
	setTimeout(checkDevice, 1000, pageState);

}
else if(window.location.hash =='#contact'){
  pageState ="#contact";
	setTimeout(checkDevice, 1000, pageState);
}
else if(window.location.hash =='#about'){
  pageState ="#about";
  setTimeout(checkDevice, 1000, pageState);
}

else if(window.location.hash =='#gallery'){
  pageState ="#gallery";
  setTimeout(checkDevice, 1000, pageState);
}
});

function checkDevice(pageState){
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
    {
      isMobile = true;
      setMobileHeight();
      openPage(pageState);
    }
    else {
      setHeight();
      openPage(pageState);
    }
    
};

function openPage(pageState){
  if(isMobile && pageState==''){
    mobileHomeClick();
  }
  else if(!isMobile && pageState==''){
    homeClick();
  }
  else if(pageState=='#home'){
    homeClick();
  }
  else if(pageState=='#mobileHome'){
    $("#div-menuIcon").css('visibility','hidden');
    $("#div-mobileSocialNav").css('visibility','hidden');
    $("#div-mobileContainer").show();
    
    mobileHomeClick();
  }
  else if(pageState =='#menu'){
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
    menuClick();
  }
  else if(pageState =='#contact'){
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
    contactClick();
  }
  else if(pageState =='#about'){
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
    aboutClick();
  }
  else if(pageState=='#gallery'){
    $("#div-menuIcon").css('visibility','visible');
    $("#div-mobileSocialNav").css('visibility','visible');
    $("#div-mobileContainer").show();
    galleryClick();
  }
}

function setMobileHeight(){

var headerDivheight= $("#div-header").height();
headerDivheight = headerDivheight/6;
$("#div-header").css("height", headerDivheight);
var headerDivWidth = $("#div-header").width();


$("h1").css( "text-align", "center");
$("h1").css( "font-weight", "100");
$("h1").css( "fontSize", "436%" );
var headingWidth = $("h1").width();
var headingHeight = $("h1").height();
var headerLeft = (headerDivWidth - headingWidth)/2;
var headerTop = (headerDivheight - headingHeight)/2;

$("h1").css( "top", headerTop);
$("h1").css( "left", headerLeft);

$("#div-subContainer").css( "margin-top", '7%');

};


function setHeight(){
var headerDivheight= $("#div-header").height();
headerDivheight = headerDivheight/5;
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

$("#div-nav").show();
$("#div-nav").css('top',headerDivheight);
$("#div-subContainer").css( "margin-top", '5%');

};


$(window).on('hashchange', function() {

  if(window.location.hash ==''){
    if(isMobile){
      $("#div-menuIcon").css('visibility','hidden');
      $("#div-mobileSocialNav").css('visibility','hidden');
      $("#div-mobileContainer").css('display','none');
      mobileHomeClick();
    }
    else{
 
      homeClick();
    }
  	
  }
  else if(window.location.hash =='#home'){

  	homeClick();
  }
  else if(window.location.hash =='#mobileHome'){
    $("#div-menuIcon").css('visibility','hidden');
    $("#div-mobileSocialNav").css('visibility','hidden');
    $("#div-mobileContainer").css('display','none');
    mobileHomeClick();
  }
  else if(window.location.hash =='#menu'){
    menuClick();
    $("#div-mobileContainer").css('display','none');
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
  	
  }
  else if(window.location.hash =='#contact'){
    contactClick();
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
  	
  }
  else if(window.location.hash =='#about'){
    if(isMobile){
      $("#div-menuIcon").css('visibility','visible');
      $("#div-mobileSocialNav").css('visibility','visible');
      $("#div-mobileContainer").show();
    }
    aboutClick();
  }
  else if(window.location.hash =='#gallery'){
    $("#div-menuIcon").css('visibility','visible');
    $("#div-mobileSocialNav").css('visibility','visible');
    $("#div-mobileContainer").show();
    galleryClick();
  }
});



function homeClick(){
	$("#div-subContainer").load("home");
	//return false;
};

function mobileHomeClick(){
  $("#div-subContainer").load("mobileHome");
  //return false;
};

function aboutClick(){
  $("#div-subContainer").load("about");
  return false;
};

function menuClick(){
	$("#div-subContainer").load("menu");
	return false;
};
function contactClick(){
	$("#div-subContainer").load("contact", initMap);
	return false;
};
function galleryClick(){
  $("#div-subContainer").load("gallery");
  return false;
};

function initMap() {
		  var contactDivWidth = $("#div-contactDetails").css('width');
		  var contactDivHeight = $("#div-contactDetails").css('height');
		  var borderWidth = 10;
      var mapWidth;
      if(isMobile){
           mapWidth = parseInt($("#div-subContainer").css('width')) - borderWidth; 
            $("#div-map").css('width', mapWidth +'px');
            $("#div-map").css('height', contactDivHeight);
      }
      else{
            mapWidth = parseInt($("#div-subContainer").css('width')) - parseInt(contactDivWidth) - borderWidth; 
            $("#div-map").css('width', mapWidth +'px');
            $("#div-map").css('height', contactDivHeight);
      }
		 
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

