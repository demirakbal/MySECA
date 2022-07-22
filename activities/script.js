$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 1){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // sticky title2 on scroll script
        if(this.scrollY > 1){
            $('.title2').addClass("sticky");
        }else{
            $('.title2').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 833){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // scrollbar show/hide script
        if(this.scrollY > 500){
            $('::-webkit-scrollbar-track').addClass("show");
        }else{
            $('::-webkit-scrollbar-track').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
//Colour theme picker

const colors = document.getElementsByClassName('colors');

let i;
for(i = 0;i<colors.length;i++){
    colors[i].addEventListener('click', changecolor)
}

function changecolor(){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
}

const circle = document.getElementsByClassName('circle');

let x;
for(x = 0;x<circle.length;x++){
    circle[x].addEventListener('click', tog)
}

const ul = document.getElementsByClassName("ul");

var a = 1;
function tog(){
    for(var y = 0; y < ul.length; y++)
    for(var c = 0; c < circle.length; c++)
    if(a == 1){
        ul[y].classList.add("open");
        circle[c].classList.add("open");
        return a=0;
    }
    else{
        ul[y].classList.remove("open");
        circle[c].classList.remove("open");
        return a=1;
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
