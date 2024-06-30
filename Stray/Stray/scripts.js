// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.container');

    if (localStorage.getItem('overlayHidden') === 'true') {
        overlay.style.display = 'none';
        container.style.display = 'block';
    } else {
    overlay.addEventListener('click', function() {
        overlay.style.opacity = '0';
        container.style.display = 'block';
        localStorage.setItem('overlayHidden', 'true')
    })};
});

const bathroomDoorButton = document.getElementsByClassName("button bathroomDoorButton")[0];
bathroomDoorButton.addEventListener('click',function(){
    alert('这是一个卫生间门。');
});