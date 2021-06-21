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