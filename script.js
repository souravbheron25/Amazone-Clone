
const images = [
    'bgimage1.jpg',  
    'bgimage2.jpg',
    'bgimage3.jpg',
    'bgimage4.jpg',
    'bgimage5.jpg'
];

let currentIndex = 0;
function changeBackgroundImage() {
    const backgroundContainer = document.querySelector('.background-container');

    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

setInterval(changeBackgroundImage, 5000);

changeBackgroundImage();
