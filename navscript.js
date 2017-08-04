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

//onload="setTimeout(openNav(), 300);"
