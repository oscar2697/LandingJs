const ACTIVECLASS = 'active';
const images = document.querySelectorAll('.slider');

images[0].classList.add(ACTIVECLASS);

function removeActiveClass(){
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if(elm){
        elm.classList.remove(ACTIVECLASS);
    }
}

function addClass($event){
    $event.stopPropagation();
    removeActiveClass();
    const  target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

images.forEach(image => {
    image.addEventListener('click', addClass);
});

$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
});