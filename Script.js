window.onload = function () {
    window.scrollTo(0,0);
};

const burgerButton = document.getElementById('hamburger');
const menuBar = document.getElementsByClassName('section-3')[0]
const menuLink = document.getElementById('menu-bar');


burgerButton.addEventListener('click', toggleButton);
menuLink.addEventListener('click', toggleButton);

function toggleButton (){
    menuBar.classList.toggle('active');
}



const submit = document.getElementById('submit');
const messageBox = document.getElementById('insert-message');
const dataBox = document.getElementsByName('insert-data');



submit.addEventListener('click', validateMessage);

function validateMessage(e){
    e.preventDefault();
    if(messageBox.value !== '' && dataBox[0, 1, 2, 3].value !== ''){
        alert('\nMessage sent!\n\nThank you for time!');
        window.location.reload();
    } else {
        alert('\nMessage NOT sent!!!\n\nFill in all the fields in the contact form!');   
        
}}


window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-5');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        
        content.classList.add('active');
    } else {
        content.classList.remove('active')
    }
})

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-6');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-6');
    } else {
        content.classList.remove('active-6')
    }
})
window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-7');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-7');
    } else {
        content.classList.remove('active-7')
    }
})
window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-8');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-8');
    } else {
        content.classList.remove('active-8')
    }
})
window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-9');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-9');
    } else {
        content.classList.remove('active-9')
    }
})

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-9');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-9');
    } else {
        content.classList.remove('active-9')
    }
})

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.section-10');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.6;
    if(contentPosition < screenPosition){
        console.log('ovde');
        content.classList.add('active-10');
    } else {
        content.classList.remove('active-10')
    }
})




