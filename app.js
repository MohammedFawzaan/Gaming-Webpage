const nextBtn = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movies = ['videos/hero-1.mp4', 'videos/hero-2.mp4', "videos/hero-3.mp4", "videos/hero-4.mp4"];
let index = 0;

nextBtn.addEventListener('click', () => {
    index += 1;
    video.src = movies[index];
    if(index == 3) {
        index = -1;
    }
});