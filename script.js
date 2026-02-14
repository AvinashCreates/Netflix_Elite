// Movie data for Hero Slider
const movies = [
    {
        title: "Interstellar",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        bg: "images/IN.jpg"
    },
    {
        title: "Stranger Things",
        desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.",
        bg: "images/ST3.jpg"
    },
    {
        title: "The Dark Knight",
        desc: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
        bg: "images/DK3.jpg"
    }
];

let currentIndex = 0;
const hero = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroContent = document.querySelector('.hero__contents');

// Function to rotate Hero content
function updateHero() {
    const movie = movies[currentIndex];
    
    // Smooth transition
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(15px)';

    setTimeout(() => {
        hero.style.backgroundImage = `url('${movie.bg}')`;
        heroTitle.innerText = movie.title;
        heroDesc.innerText = movie.desc;
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 1000); 

    currentIndex = (currentIndex + 1) % movies.length;
}

setInterval(updateHero, 8000); 
updateHero();

// Navbar Scroll logic
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 150) navbar.classList.add('nav__black');
    else navbar.classList.remove('nav__black');
});

// Video Player Logic
const videoOverlay = document.getElementById('videoOverlay');
const mainVideo = document.getElementById('mainVideo');

function playMovie() {
    videoOverlay.style.display = 'flex';
    mainVideo.play();
}

function closeVideo() {
    videoOverlay.style.display = 'none';
    mainVideo.pause();
    mainVideo.currentTime = 0;
}

// Attach Play functionality to all movie cards
document.querySelectorAll('.movie__card').forEach(card => {
    card.addEventListener('click', () => {
        playMovie();
    });
});

// Mouse Wheel Horizontal Scroll
document.querySelectorAll('.row__posters').forEach((container) => {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    }, { passive: false });
});