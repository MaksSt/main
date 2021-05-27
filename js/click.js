
const button = document.getElementById('admin-button');

button.addEventListener('click', event => {
    document.getElementById('h1').innerHTML = 'You Found Secret';
    document.getElementById('redirect').innerHTML = 'Click to button - redirect';
    document.getElementById("admin-button").style.display='none';
    document.getElementById("link").style.display='block';
});