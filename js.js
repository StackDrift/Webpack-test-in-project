
    let button = document.getElementById('open');
    let close = document.getElementById('close')
    let modal = document.getElementById('modal');
    button.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
    });
    close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'none';
    });


const scrollButton = document.getElementById('scrolltoup');
const scrollThreshold = 400; 

function toggleScrollButton() {
    if (window.scrollY > scrollThreshold) {
        scrollButton.style.display = 'block'; 
    } else {
        scrollButton.style.display = 'none';
    }
}

window.addEventListener('scroll', toggleScrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});