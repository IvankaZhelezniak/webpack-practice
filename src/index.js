import name from './module-1';
import './css/common.scss';
import './css/button.scss';

console.log(name);

console.log('Это index.js');

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем заголовок в DOM
const root = document.querySelector('#root');
root.append(heading);