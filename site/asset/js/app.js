
//-----------BURGER MENU--------------
const rond= document.querySelector('.paralax');
const rond2= document.querySelector('#paralaxmain');
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu")

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    rond.classList.toggle('active')
});

//----------- Parallax-------------


document.addEventListener('mousemove',parallax);
function parallax(e){
        
        const speed = rond.getAttribute('data-speed')
        const x =(window.innerWidth - e.pageX*speed)/80
        const y =(window.innerHeight - e.pageY*speed)/80

        rond.style.transform =  `translateX(${x}px) translateY(${y}px)`    
};
document.addEventListener('mousemove',parallax2);
function parallax2(e){
        
        const speed = rond2.getAttribute('data-speed')
        const x =(window.innerWidth - e.pageX*speed)/80
        const y =(window.innerHeight - e.pageY*speed)/80

        rond2.style.transform =  `translateX(${x}px) translateY(${y}px)`    
};

/////Loader//////

function afficher(){
        document.querySelector(".loader-content").classList.add("cache");
    }
    
    setTimeout(afficher, 3500);
