//sticky header
const header = document.querySelector(".main_navbar");
const sticky = header.offsetTop;

window.addEventListener("scroll", () => {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})
//scroll up button
const toTop = document.querySelector(".scroll_top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
// owl carousel activation code
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
  });
});