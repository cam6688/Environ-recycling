function openNav() {
    document.getElementById("mySidenav").style.width = "190px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("main").style.marginRight = "10px";
}

$(document).ready(function () {
    $('#DIV_1').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_1').removeClass('animatable');
    }, 1000)
});

$(document).ready(function () {
    $('#DIV_2').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_2').removeClass('animatable');
    }, 1000)
});

$(document).ready(function () {
    $('#DIV_3').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_3').removeClass('animatable');
    }, 1000)
});

$(document).ready(function () {
    $('#DIV_4').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_4').removeClass('animatable');
    }, 1000)
});
$(document).ready(function () {
    $('#DIV_5').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_5').removeClass('animatable');
    }, 1000)
});
//onload="setTimeout(openNav(), 300);"
(function($){
  $('vegas-slider').vegas({
    slides: [
        {src : 'CLiffside1.jpg'},
        {src : 'beach.jpg'},
        {src : 'forest.jpeg'}
    ]
  });

});
