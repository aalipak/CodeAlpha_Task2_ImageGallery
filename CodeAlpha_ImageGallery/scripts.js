const images = [
    'images/animals-blue-cats-eyes-wallpaper-preview.jpg',
    //'images/cat-3523992_640.jpg',
    'images/cat-mammal-dandelion-flower-wallpaper-preview.jpg',
    'images/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.avif',
    'images/HD-wallpaper-cats-cat.jpg',
    'images/pexels-pixabay-45201.jpg',
    'images/photo-1529778873920-4da4926a72c2.jpeg'
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    galleryImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

updateImage();
