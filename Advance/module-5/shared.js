const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (button of selectPlanButtons) {
    button.addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; this will over write any other class attached to the element.
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
})

if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal)
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

})

// console.dir(backdrop);

// for(const i = 0; i < selectPlanButtons.length; i++) {
//     selectPlanButtons[i].addEventListener('click', () => {
//         modal.style.display = 'block';
//         backdrop.style.display = 'block';
//     }); 
// }

