AOS.init();

const imgPos=document.getElementById('img-pos');
const heading=document.getElementById('heading');

window.addEventListener('scroll', () => {
    let { scrollY } = window;

    imgPos.style.top = (0.5) * scrollY + 'px';
    // heading.style.transform = 'translateX('+(0.2*scrollY)+'%)';
    console.log(heading.style.transform);
    
});
imgPos.addEventListener('click',()=>{
    heading.style.transform='translateX(0)';
})

