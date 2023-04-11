AOS.init();
const imgPos=document.getElementById('img-pos');
const heading=document.getElementById('heading');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    let value=(0.5) * scrollY 
    imgPos.style.top = value+ 'px';
    // heading.style.transform = 'translateX('+(0.2*scrollY)+'%)';
    console.log(heading.style.transform);
    
});
imgPos.addEventListener('click',()=>{
    imgPos.style.top=value-10+'px';
})

