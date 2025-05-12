'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    //Гамбургер
    const hamburger = document.querySelector('.hamburger'),
          header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    })        
})