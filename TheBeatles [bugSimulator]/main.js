var images = [
    'https://www.theplace.ru/archive/the_beatles/img/12101.jpg', 
    'https://www.theplace.ru/archive/the_beatles/img/0_56669_a9f11225_XX.jpg', 
    'https://www.theplace.ru/archive/the_beatles/img/tumblr_ludwgmDXQc1qd.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/BEA_P63_006.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/The_Beatles_AbbeyRoa-3.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/1329975.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/1354282.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/201104261153503818.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/2048_xxxxxx8.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/2048_153619608.jpg',
    'https://www.theplace.ru/archive/the_beatles/img/1e0d4aba5bc8.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

//

function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle('show');
}