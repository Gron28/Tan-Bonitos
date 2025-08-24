document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = {
        logoImage: 'images/logo-big.png',
        logoImageSmall: 'images/logo-small.png',
        footerLogo: 'images/logo-footer.png',
        ctaGiraffe: 'images/cta-giraffe.png',
        heroImage1: 'images/hero-1.jpg',
        heroImage2: 'images/hero-2.jpg',
        heroImage3: 'images/hero-3.jpg',
        ajuarBatita: 'images/ajuar-batita.jpg',
        ajuarGorrito: 'images/ajuar-gorrito.jpg',
        accesorioSonajeros: 'images/accesorio-sonajeros.jpg',
        accesorioPortachupetes: 'images/accesorio-portachupetes.jpg',
        colitaFucsia: 'images/colita-fucsia.jpg',
        colitaLila: 'images/colita-lila.jpg',
        colitaRosa: 'images/colita-rosa.jpg',
        colitaVerde: 'images/colita-verde.jpg',
        colitaTurquesa: 'images/colita-turquesa.jpg',
    };
    const whatsappNumber = '5491123455432';
    const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría saber más sobre los productos de Tan Bonitos!');
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    document.getElementById('cta-whatsapp-btn').href = whatsappURL;
    document.getElementById('whatsapp-float-btn').href = whatsappURL;
    document.getElementById('footer-whatsapp-link').href = whatsappURL;
    
    document.getElementById('logo-img-big').src = imagePaths.logoImage;
    document.getElementById('logo-img-small').src = imagePaths.logoImageSmall;
    document.getElementById('footer-logo-img').src = imagePaths.footerLogo;
    document.getElementById('cta-giraffe-img').src = imagePaths.ctaGiraffe;
    document.querySelectorAll('[data-img-key]').forEach(el => {
        if (imagePaths[el.dataset.imgKey]) el.src = imagePaths[el.dataset.imgKey];
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    const track = document.querySelector('.carousel-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    const heroImages = [imagePaths.heroImage1, imagePaths.heroImage2, imagePaths.heroImage3];
    let currentIndex = 0;

    heroImages.forEach((src, i) => {
        track.innerHTML += `<div class="carousel-slide"><img src="${src}" alt="Producto destacado ${i + 1}"></div>`;
        dotsContainer.innerHTML += `<div class="dot" data-index="${i}"></div>`;
    });
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(index) {
        currentIndex = index;
        slides.forEach((slide, i) => {
            let offset = i - currentIndex;
            if (offset < -1) offset += slides.length;
            if (offset > 1) offset -= slides.length;
            slide.style.transform = `translateX(${offset * 100}%) scale(0.8)`;
            slide.style.opacity = Math.abs(offset) > 0 ? 0.4 : 1;
        });
        slides[currentIndex].style.transform = 'translateX(0) scale(1)';
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }
    
    dots.forEach(dot => dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index))));
    document.querySelector('.carousel-button.next').addEventListener('click', () => goToSlide((currentIndex + 1) % slides.length));
    document.querySelector('.carousel-button.prev').addEventListener('click', () => goToSlide((currentIndex - 1 + slides.length) % slides.length));
    
    goToSlide(0);
});