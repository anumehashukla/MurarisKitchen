$( document).ready(function() {
    console.log( "ready!" );
});

$(window).bind("load", function() {

setTimeout(setHeight, 1000);
});

function setHeight(){
var mainDivheight= $("#mainDiv").height();
mainDivheight = mainDivheight/6;
$("#mainDiv").css("height", mainDivheight);
var mainDivWidth = $("#mainDiv").width();

$("h1").css( "fontSize", "500%" );
$("h1").css( "text-align", "center");
$("h1").css( "font-weight", "100");

var headingWidth = $("h1").width();
var headingHeight = $("h1").height();
var headerLeft = (mainDivWidth - headingWidth)/2;
var headerTop = (mainDivheight - headingHeight)/2;


$("h1").css( "top", headerTop);
$("h1").css( "left", headerLeft);
$("#homeIframe").css('width', mainDivWidth);
$("#homeIframe").css('height', ($(window).height() - mainDivheight));


};







