function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

$(document).ready(function () {
    $('#DIV_1').attr('class', 'animatable');
    setTimeout(function () {
        $('#DIV_1').removeClass('animatable');
    }, 1000)
});

//onload="setTimeout(openNav(), 300);"
