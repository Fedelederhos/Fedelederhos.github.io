document.addEventListener('DOMContentLoaded', function () {
    var background = document.querySelector('.background');

    var circle = document.createElement('div');
    circle.classList.add('circle');
    background.appendChild(circle);
});

// SCRIPT PARA WHITE-BAR CON REDES SOCIALES

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

// SCRIPT PARA CUADROS DE DIÁLOGO
// Obtener referencias a los botones de información adicional
const additionalInfoButtons = document.querySelectorAll('.additional-info-button');

// Función para abrir o cerrar el cuadro de texto adicional
function toggleAdditionalInfo(event) {
    const button = event.target;
    const box = button.closest('.box');
    const additionalInfoBox = box.querySelector('.additional-info-box');

    if (additionalInfoBox.style.display === 'none') {
        additionalInfoBox.style.display = 'block';
        button.textContent = 'SHOW LESS';
    } else {
        additionalInfoBox.style.display = 'none';
        button.textContent = 'SHOW MORE';
    }
}

// Agregar eventos de clic a los botones de información adicional
additionalInfoButtons.forEach(button => {
    button.addEventListener('click', toggleAdditionalInfo);
});

//SCRIPT PARA CAMBIAR LOS TEXTOS EN DISPOSITIVOS MÓVILES
// Obtener referencia al elemento de texto
var box1text = document.getElementById("box1-text");
var box2text = document.getElementById("box2-text");

// Verificar si el dispositivo es móvil
var isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

// Cambiar el texto si el dispositivo es móvil
if (isMobile) {
    box1text.textContent = "UTN FRCU";
    box2text.textContent = "GIBD";
}