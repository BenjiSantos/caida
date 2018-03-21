$(document).ready(function(){
    $(".hide-paragraph").hide();
    $("#video")[0].autoplay = true;
    $("#intro-buttom").click(function(){
        $("#intro-paragraph").toggle(1000,function(){
            $("#intro-buttom").text($("#intro-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
    $("#firts-buttom").click(function(){
        $("#first-paragraph").toggle(1000,function(){
            $("#firts-buttom").text($("#firts-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
    $("#second-buttom").click(function(){
        $("#second-paragraph").toggle(1000,function(){
            $("#second-buttom").text($("#second-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
    $("#third-buttom").click(function(){
        $("#third-paragraph").toggle(1000,function(){
            $("#third-buttom").text($("#third-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
    $("#fourth-buttom").click(function(){
        $("#fourth-paragraph").toggle(1000,function(){
            $("#fourth-buttom").text($("#fourth-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
    $("#fifth-buttom").click(function(){
        $("#fifth-paragraph").toggle(1000,function(){
            $("#fifth-buttom").text($("#fifth-buttom").text() == 'Ver más' ? 'Ver menos' : 'Ver más');
        });
    });
});

var video = document.getElementById('video');
video.addEventListener('click',function(){
    video.play();
},false);
