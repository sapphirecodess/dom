const p = document.querySelector('.test-text');
p.innerHTML = 'Привет, <b>мир!</b> Меня зовут <i>Данила.</i>';
p.style.backgroundColor = 'lightblue';
p.style.color = 'blue';
p.style.border = '2px solid blue';

const email = document.getElementById('email');
email.value = 'mail@mail.ru';
email.disabled = true;
document.getElementById('remember').checked = true;
document.getElementById('btn').textContent = 'Войти';

const UNI_URL = 'https://midis.ru/'; 
const link = document.createElement('a');
link.textContent = 'ссылка на сайт';
link.href = UNI_URL;
link.target = '_blank';
link.className = 'fancy-link';
document.getElementById('link-box').appendChild(link);

document.getElementById('start').addEventListener('click', function () {
  document.getElementById('balloon').style.transform = 'translateY(-440px)';
});
