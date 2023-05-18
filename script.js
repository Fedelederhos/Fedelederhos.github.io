document.addEventListener('DOMContentLoaded', function () {
    var background = document.querySelector('.background');

    var circle = document.createElement('div');
    circle.classList.add('circle');
    background.appendChild(circle);
});

const icons = document.querySelectorAll('.white-bar .icon');
const icons2 = document.querySelectorAll('.white-bar .icon img');
const iconImages = ['https://i.imgur.com/7pcXaN8.png', 'https://i.imgur.com/7pcXaN8.png', 'https://i.imgur.com/7pcXaN8.png'];
const hoverImages = ['https://i.imgur.com/ecKP3WD.png', 'https://i.imgur.com/J5TDwzc.png', 'https://i.imgur.com/PbSeyfn.png'];
const pageUrls = ['https://www.linkedin.com/in/federicolederhos', 'https://github.com/Fedelederhos', 'https://www.instagram.com/federicolederhos/'];

document.querySelector('.white-bar').addEventListener('mouseover', () => {
    icons.forEach((icon, index) => {
        icon.style.transform = `translateX(${index * 15}px)`;
    });
    icons2.forEach((icon, index) => {
        icon.src = hoverImages[index];
        icon.style.width = '20px'; 
        icon.style.height = '20px';
    });
    icons2.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            window.open(pageUrls[index], '_blank');
        });
    });
});

document.querySelector('.white-bar').addEventListener('mouseout', () => {
    icons.forEach((icon, index) => {
        icon.style.transform = '';
    });
    icons2.forEach((icon, index) => {
        icon.src = iconImages[index];
        icon.style.width = '10px';
        icon.style.height = '10px';
    });
    icons2.forEach((icon, index) => {
        icon.removeEventListener('click', () => { });
    });
});