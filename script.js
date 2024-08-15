//loading animation
const loading = document.querySelector('.loading')
const content = document.querySelector('.content')
function load(){
    loading.classList.add("hide");
    content.classList.remove("hide");
}
setTimeout(load,3500);

//scroll effect
document.addEventListener('DOMContentLoaded',()=>{
    const fadeElements=document.querySelectorAll('.fade-in')
    function checkFade(){
        fadeElements.forEach(el=>{
            const rect=el.getBoundingClientRect()//gives size of element relative to view port
            const elTop=rect.top
            const elBottom=rect.bottom

            const isVisible = elTop < window.innerHeight && elBottom >= 0

            if(isVisible){
                el.classList.add('visible')
            }
        })
    }
    window.addEventListener('scroll',checkFade);
    window.addEventListener('resize',checkFade);

})

//header scroll
const header=document.querySelector('header');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > header.offsetHeight+100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
})

//profession typewriter effect

const textArr=["2nd Year B.tech Student","FrontEnd Developer","Tech Enthusiast"]
const profession=document.querySelector('.profession');
let arrIndex=0
let charIndex=0

writeText()
function writeText(){
    const currentText=textArr[arrIndex]
    profession.innerText=currentText.slice(0,charIndex);
    charIndex++
    if(charIndex>currentText.length){
        charIndex=0
        arrIndex++
        if(arrIndex>=textArr.length){
            arrIndex=0
        }
        setTimeout(writeText,250)
    }else{
        setTimeout(writeText,350)
    }


}

//moving box shadow
const heroImg=document.querySelector('.hero-img')
let angle=0
function rotateShadow(){
    const xOffset=Math.sin(angle)
    const yOffset=Math.cos(angle)
    heroImg.style.boxShadow=`box-shadow: ${xOffset} ${yOffset} 50px #FFD700;`
    angle+=0.9
    requestAnimationFrame(rotateShadow)//function to request an animation for callback function
}
rotateShadow()

const goToContactBtn=document.getElementById('go-to-contact');
goToContactBtn.addEventListener('click',()=>{
    window.scrollTo({top: document.body.scrollHeight,behavior: 'smooth'});
})

const openBTn=document.querySelector('.open-nav');
const mobNav=document.querySelector('.mobile-nav');
openBTn.addEventListener('click',()=>{
    mobNav.classList.add('active');
})
const closeBTn=document.querySelector('.close-nav');
closeBTn.addEventListener('click',()=>{
    mobNav.classList.remove('active');
})
