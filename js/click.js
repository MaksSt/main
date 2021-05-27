
const button = document.getElementById('admin-button');

button.addEventListener('click', event => {
    document.getElementById("admin-button").style.display='none';
    document.getElementById("link").style.display='block';
});