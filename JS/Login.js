const loginform = document.querySelector('#login-form');
const logininput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USER_NAME = 'username';

function handleLogin(event) {
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const USER_NAME = logininput.value;
    localStorage.setItem('USER_NAME', USER_NAME);

    greeting.innerText = `Hello ${USER_NAME} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginform.addEventListener('submit', handleLogin);

function greetingOpener(USER_NAME) {
    greeting.innerText = `Hello ${savedusername} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedusername = localStorage.getItem('USER_NAME');

if(savedusername === null) {
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener('submit', handleLogin);
} else {
    greetingOpener(USER_NAME);  
}