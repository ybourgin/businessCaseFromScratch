let images = new Array("img/homePageSlider/1.jpg", "img/homePageSlider/2.jpg", "img/homePageSlider/3.jpg", "img/homePageSlider/4.jpg");
let legendes = new Array("Foret", "Montagne","Campagne","Plage")
let numero = 0;
let cycle = 1;
let timer;
let btGauche = document.querySelector(".sliderBtnLeft")
let startCycle = document.querySelector(".btnStartCycle");
let btCycle = document.querySelector(".btnSliderCycle");
// console.log(startCycle);

function Cycle(e){
    if (cycle>0){
        timer=setInterval("ChangeImage(1)", 2000);
        btCycle.src = "img/homePageSlider/btnPause.svg";
        cycle-- ;
    }
    else {
        clearInterval(timer);
        btCycle.src = "img/homePageSlider/btnPlay.svg";
        cycle++ ;
    }
    // console.log(cycle);
    // console.log(e.view);
// console.log(e.value);
}

function ChangeImage(e) {
    numero = numero + e;
    if (numero < 0){
        numero = images.length - 1;
    }
    if (numero > images.length - 1){
        numero = 0;
    }
        document.querySelector(".images").src = images[numero];
        let legende = document.querySelector(".sliderImagelegend")
        legende.innerHTML = legendes[numero];
        // console.log(images[numero]);
        // console.log(numero);
        // console.log(e);
}