let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const displayCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;

    displayCounter.textContent = counterValue;

});
 
incrementBtn.addEventListener('click', () => {
    counterValue += 1;

    displayCounter.textContent = counterValue;

 });




// Не смог привязать, если не 0, чтобы было 0 ...

// const btns = document.querySelectorAll('button');

// btns.forEach(btn => {
//         btn.addEventListener('click', function() {
//         const activ = this.dataset.action;
//         const displayCounter = this.parentElement.querySelector('#value');
//         const counterValue = parseInt(displayCounter.textContent);
                
//         let currentValue;
//                 if (activ === 'decrement') {
            
//             currentValue = counterValue - 1;
//         } else {
//             currentValue = counterValue + 1;
//         }
//         return displayCounter.textContent = currentValue;

//     });
// });
    








