// import functions

// reference needed DOM elements
const lionImage = document.getElementById('lion-image');
const lionSound = document.getElementById('lion-sound');

const wolfImage = document.getElementById('wolf-image');
const wolfSound = document.getElementById('wolf-sound');

const lambImage = document.getElementById('lamb-image');
const lambSound = document.getElementById('lamb-sound');


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

let lionClicks = 0;
let wolfClicks = 0;
let lambClicks = 0;


// for lion

lionImage.addEventListener('click', () => {
    lionSound.play();
    lionClicks = lionClicks + 1;
    console.log('cat clicks is now' + lionClicks);
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'l') {
        lionSound.play();
    }
});

// for wolf

wolfImage.addEventListener('click', () => {
    wolfSound.play();
    wolfClicks = wolfClicks + 1;
    console.log('cat clicks is now' + wolfClicks);
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        wolfSound.play();
    }
});


// for lamb

lambImage.addEventListener('click', () => {
    lambSound.play();
    lambClicks = lambClicks + 1;
    console.log('cat clicks is now' + lambClicks);
});

document.addEventListener('keyup', (event) => {
    if (event.key === 's') {
        lambSound.play();
    }
});

