/*==================MENU SHOW Y HIDDEN====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=======================MENU SHOW=======================*/
/* Validate if constant exits*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*=======================MENU HIDDEN =======================*/
/* Validate if constant exits*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===================== REMOVE MENU MOBILE===================*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===================== ACCORDION SKILLS===================*/
const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    // console.log(typeof(this.parentNode.className));
    console.log(itemClass);
    // if (this.parentNode.className == 'skills_content skills_close'){
        
        // }
        // else
        //     this.parentNode.className = 'skills_content skills_open';
    console.log(skillsContent);
    for(i=0; i< skillsContent.length; i++){
        // if(skillsContent != this)
        skillsContent[i].className = 'skills_content skills_close';
        // console.log(skillsContent[i].className);
    }
        // this.parentNode.className = 'skills_content skills_open';
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = ' skills_content skills_open';
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*===================== QUALIFICATION TABS===================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target =document.querySelector(tab.dataset.target)
        console.log(target);
        tabContents.forEach(tabContent =>{
            console.log(tabContent);
            // if(tabContent != target)
                tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})      

/*===================== Portfolio swiper===================*/

let swiper = new Swiper(".portfolio_container", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
        
      });
   
/*============Scroll Sections Active Link===============*/
const sections =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')

        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }    
        
    })
}
window.addEventListener('scroll',scrollActive)

/*===========Change Background Header================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*============ Show Scroll Up ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scroLLY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*========== Dark Light Theme =============== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark -theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark /icon theme
    // console.log("theme");
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
