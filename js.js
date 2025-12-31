const openButtons = document.querySelectorAll('.btn-in-card');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

openButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });
});

if (close && modal) {
    close.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
    });
}


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




const form = document.getElementById('emailForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputField = document.getElementById('email-input');
  const value = inputField.value.trim();

  if (!value) {
    alert('Пожалуйста, введите email');
    return;
  }

  fetch('/send.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: value }) 
  })
  .then(response => response.text())
  .then(res => {
    console.log('Сервер ответил:', res);
    messageDiv.style.display = 'block';
    form.reset();
    setTimeout(() => { messageDiv.style.display = 'none'; }, 2000);
  })
  .catch(err => {
    console.error('Ошибка:', err);
    alert('Ошибка при отправке данных');
  });
});
