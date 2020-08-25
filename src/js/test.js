import '../scss/main.scss';

console.log('ELO');

const button = document.querySelector('.dark-mode--js');

const colorBackground = getComputedStyle(document.documentElement).getPropertyValue('--background');
console.log(colorBackground);

const colorAccent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent');
console.log(colorAccent);

let isDark = false

/* button.addEventListener('click', () => {
    isDark = true
}) */

button.addEventListener('click', () => {
    if (isDark == false) {
        isDark = true;
        document.documentElement.style.setProperty('--background', '#333333');
        document.documentElement.style.setProperty('--font-color', '#e9e9e9');
        console.log('dark mode');
    } else {
        isDark = false;
        document.documentElement.style.setProperty('--background', '#e9e9e9')
        document.documentElement.style.setProperty('--font-color', '#333333')
        console.log('light mode');
    }
})


/* button.addEventListener('click', () => {
    if (colorBackground == '#e9e9e9') {
        document.documentElement.style.setProperty('--background', '#333333')
        document.documentElement.style.setProperty('--font-color', '#e9e9e9');
        console.log(colorBackground)
    }
}); */

/* button.addEventListener('click', () => {
    if (colorBackground == '#333333') {
        document.documentElement.style.setProperty('--background', '#e9e9e9')
        document.documentElement.style.setProperty('--font-color', '#333333');
        console.log('Ponowna zmiana')
    }
}); */