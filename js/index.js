const texts = ['UX Designer  ', 'Programmer   ','Student   '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// this code will envoke itself
function type() {

   if(count === texts.length){
      count = 0;
   }
   currentText = texts[count];
   letter = currentText.slice(0, index++);

   document.querySelector('.typing').textContent = letter;
   if(letter.length === currentText.length){
      count++;
      index = 0
   }

   setTimeout(type, 250);

}

setTimeout(type, 3000)

// nav

const iconTrigger = document.querySelector('#iconTrigger')
const icon = document.querySelector('#icon')
const menuContainer = document.querySelector('.menu-container')

iconTrigger.addEventListener('click', () => {
   if (icon.classList.contains('fa-bars')) {

      icon.classList.remove('fa-bars')
      icon.classList.add('fa-close')

      menuContainer.classList.add('show')
      menuContainer.classList.remove('hide')

   } else {

      icon.classList.add('fa-bars')
      icon.classList.remove('fa-close')

      menuContainer.classList.remove('show')
      menuContainer.classList.add('hide')

   }

})

function parallax() {
   icon.classList.add('fa-bars')
   icon.classList.remove('fa-close')

   menuContainer.classList.remove('show')
   menuContainer.classList.add('hide')
   
 }


