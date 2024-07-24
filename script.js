//loading animation
const loading = document.querySelector('.loading')
const content = document.querySelector('.content')
function load(){
    loading.classList.add("hide");
    content.classList.remove("hide");
}
setTimeout(load,3500);


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
const professionText="2nd Year B.tech Student"
const textArr=["2nd Year B.tech Student","Web Developer"]//need to make it write with multiple text from arr
const profession=document.querySelector('.profession');
let index=1
writeText()
function writeText(){
    profession.innerText=professionText.slice(0,index);
    index++
    if(index>professionText.length){
        index=1
    }
    setTimeout(writeText,200)
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

//toast notification
const submitBtn=document.getElementById('submit')
const toasts=document.getElementById('toasts')
function createToast(){
    const notif=document.createElement('div')
    notif.classList.add('toast')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    notif.innerText="Message sent successfully.Thank you!"
    toasts.appendChild(notif)
    setTimeout(()=>{
        notif.remove()
    },4000)
}
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    //create toast notification
    createToast()
})