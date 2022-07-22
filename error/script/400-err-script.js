$(document).ready(function(){
    $(window).scroll(function(){
        // scrollbar show/hide script
        if(this.scrollY > 500){
            $('::-webkit-scrollbar-track').addClass("show");
        }else{
            $('::-webkit-scrollbar-track').removeClass("show");
        }
    });

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
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Oops, you've sent a bad request..."],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

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
        console.log("hi")
        return a=0;
    }
    else{
        ul[y].classList.remove("open");
        circle[c].classList.remove("open");
        return a=1;
    }
}
