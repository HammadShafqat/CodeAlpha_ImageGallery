const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    galleryImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

updateImage();
