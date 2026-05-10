document.addEventListener('DOMContentLoaded', () => {
            
const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        }
});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

           
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentIndex = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

const modal = document.getElementById('orderModal');
const openBtns = document.querySelectorAll('.open-modal-btn');
 const closeBtn = document.querySelector('.close-modal');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
modal.classList.add('open');
});
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
});

const form = document.getElementById('contactForm');
            
form.addEventListener('submit', (e) => {
e.preventDefault();
let isValid = true;
                
const name = document.getElementById('name');
if(name.value.length < 2) {
showError(name);
isValid = false;
} else { clearError(name); }


const phone = document.getElementById('phone');
const phoneRegex = /^[\d\+\-\(\)\s]{10,}$/;
if(!phoneRegex.test(phone.value)) {
showError(phone);
isValid = false;
} else { clearError(phone); }

const email = document.getElementById('email');
if(!email.value.includes('@') || !email.value.includes('.')) {
showError(email);
isValid = false;
} else { clearError(email); }

if(isValid) {
alert('Спасибо! Заявка отправлена.');
form.reset();
}
});

function showError(input) {
input.classList.add('invalid');
input.nextElementSibling.style.display = 'block';
}

function clearError(input) {
input.classList.remove('invalid');
input.nextElementSibling.style.display = 'none';
}
});
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const totalImages = images.length;
const gallery = document.querySelector('.gallery');
const galleryContainer = document.querySelector('.gallery-container');
let autoScrollInterval;

function updateGallery(){
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function nextImage(){
    if(currentIndex < totalImages - 1){
        currentIndex++;
    }   else{
        currentIndex = 0;
    }
    updateGallery();
}

function prevImage(){
    if(currentIndex > 0){
        currentIndex--;
    } else{
        currentIndex = totalImages - 1;
    }
    updateGallery();
}
