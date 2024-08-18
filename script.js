async function loadPortfolioData(){
    try{
        const response=await fetch('data.json')
        if(!response.ok){
            throw new Error('Error fetching data')
        }
        const data=await response.json()
        console.log(data)
        renderMain(data.name,data.mainAbout)
        renderAbout(data.aboutMe)
        renderProjects(data.projects)
        renderContact()

    }
    catch (error){
        console.error(error)
    }
}
loadPortfolioData();
function renderMain(name,mainAbout){
    const main=document.getElementById('main')
    main.innerHTML=`
    <div class="hero-text">
                <h2>
                    Hi, I am
                </h2>
                <h1 class="hero-head">
                    <span>${name}</span>
                </h1>
                <h2 class="pro">Im a <span class="profession">web developer</span></h2>
                <button class="get-in-touch" id="go-to-contact">
                    Get In Touch !
                </button>
                <div class="links">
                    <a href="https://github.com/iamtanishqsethi" class="contact-element"><i class="fab fa-github"></i></a>
                    <a href="https://x.com/TanishqSethi13" class="contact-element"><i class="fab fa-x-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/tanishq-sethi-229914259/" class="contact-element"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <img src="assets/profile.jpg" alt="profile-img" class="hero-img active">
    `
    startTextAnimation(mainAbout)
}
function startTextAnimation(textArr) {
    // const textArr = ["2nd Year B.Tech Student", "Front-End Developer", "Tech Enthusiast"];
    const profession = document.querySelector('.profession');
    let arrIndex = 0;
    let charIndex = 0;

    function writeText() {
        const currentText = textArr[arrIndex];
        profession.innerText = currentText.slice(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            charIndex = 0;
            arrIndex = (arrIndex + 1) % textArr.length;  // Cycle through textArr
            setTimeout(writeText, 250);  // Pause before next word starts typing
        } else {
            setTimeout(writeText, 150);  // Speed up the typing effect
        }
    }

    writeText();  // Start the animation
}
function renderAbout(aboutMe){
    const about=document.getElementById('about');
    about.innerHTML=`
    <h1 class="about-head">
                About Me....
            </h1>
            <div class="about-content">
                <img src="assets/profile2.jpg" alt="profile2">
                <div class="about-text">
                    <p>${aboutMe}</p>
                </div>
            </div>
    `
}
function renderProjects(projects){
    const projectsContainer = document.querySelector('.projectsContainer')
    projects.forEach(project => {
        const projElement = document.createElement('div');
        projElement.classList.add('project');
        projElement.innerHTML=`
             <i class="far fa-folder project-img"></i>
             <h2 class="projectName">${project.name}</h2>
             <p class="projectDesc">${project.description}</p>
             <a href="${project.link}" class="projectLink"><i class="fab fa-github"></i></a>
        `
        projectsContainer.appendChild(projElement)
    })
}
function renderContact(){
    const contact=document.getElementById('contact');
    contact.innerHTML=`
    <h2 class="contact-me">Get In Touch</h2>
            <p class="contact-text">I am actively seeking new career opportunities, and my inbox is always open.
                Whether you have a job opportunity or if you just want to connect,
                feel free to reach out.
            </p>
            <a href="mailto:tanishqsethi05@gmail.com?subject=Contact%20Request&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%0D%0A%0D%0AThank%20you!">
                <button class="hello">Say Hello !</button>
            </a>
            `
}


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
