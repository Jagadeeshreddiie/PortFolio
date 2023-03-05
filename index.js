window.addEventListener('scroll', function(){
    let value=window.scrollY;
    let text=document.getElementById(".heading");
    text.style.transform="translateX((100-value)%)";
})
AOS.init({
    animatedClassName: 'aos-animate'
});