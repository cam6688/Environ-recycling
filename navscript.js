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

//onload="setTimeout(openNav(), 300);"
function run(interval, frames) {
    var int = 1;

    function func() {
        document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    var swap = window.setInterval(func, interval);
}
