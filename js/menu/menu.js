 
window.addEventListener("DOMContentLoaded", function(event) {
    let isOpen = false;
 const menu = document.querySelector('#mobile-sub-menu');
 const menuOpenButton = document.querySelector("#mobile-menu-button");

 /*
 https://greensock.com/docs/Easing/Bounce
 easing graph
 */

//  code to animate mobile navigation menu.
  menuOpenButton.onclick = (e)=>{
     isOpen = !isOpen;
     if(!isOpen){
        TweenMax.to(menu,  0.8, {top:"-120vh", ease:Power4.easeOut});
     }

     else{  
        TweenMax.to(menu, 0.5,  {top:"0px", ease:Power4.easeOut}); 
     }
  }
});