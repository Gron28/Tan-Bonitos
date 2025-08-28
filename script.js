document.addEventListener('DOMContentLoaded', function() {
    const CONFIG = {
        whatsappNumber: '5491123455432'
    };

    function initializeSite() {
        if (document.querySelector('[id^="category-"]')) {
            setupCategoryPages();
        }
        if (document.querySelector('.pdp-container')) {
            setupProductDetailPage();
        }
        if (document.querySelector('.carousel-track')) {
            setupHeroCarousel();
        }
        if (document.querySelector('.accordion-container')) {
            setupAccordion();
        }
        setGlobalContent();
        setupHeaderScroll();
        setupMobileNav();
        setupRevealAnimations();
    }
    function setGlobalContent() {
        const generalMessage = '¡Hola! Me gustaría saber más sobre los productos de Tan Bonitos!';
        const generalWhatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(generalMessage)}`;

        document.querySelectorAll('#cta-whatsapp-btn, #whatsapp-float-btn, #footer-whatsapp-link, #contact-whatsapp-link').forEach(el => {
            if (el) el.href = generalWhatsappURL;
        });
        const wholesaleBtn = document.getElementById('wholesale-whatsapp-btn');
        if (wholesaleBtn) {
            const wholesaleMessage = '¡Hola! Tengo una tienda y me gustaría recibir información sobre la venta mayorista.';
            wholesaleBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(wholesaleMessage)}`;
        }
        
        const pdpBtn = document.getElementById('pdp-whatsapp-btn');
        if(pdpBtn) {
            const productName = document.getElementById('pdp-name').textContent;
            const pdpMessage = `¡Hola! Me gustaría consultar por el producto: ${productName}`;
            pdpBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(pdpMessage)}`;
        }

        document.querySelectorAll('img[data-img-key]').forEach(el => {
            if (ALL_IMAGES[el.dataset.imgKey]) {
                el.src = ALL_IMAGES[el.dataset.imgKey];
                el.loading = 'lazy';
            }
        });

        const logoBig = document.getElementById('logo-img-big');
        if (logoBig) logoBig.src = ALL_IMAGES.logoImage;
        const logoSmall = document.getElementById('logo-img-small');
        if (logoSmall) logoSmall.src = ALL_IMAGES.logoImageSmall;
        const footerLogo = document.getElementById('footer-logo-img');
        if (footerLogo) footerLogo.src = ALL_IMAGES.footerLogo;
        const ctaGiraffe = document.getElementById('cta-giraffe-img');
        if (ctaGiraffe) ctaGiraffe.src = ALL_IMAGES.ctaGiraffe;
    }

    function setupHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;
        
        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); 
    }
    function setupRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    }
    function setupHeroCarousel() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        const dotsContainer = document.querySelector('.carousel-dots');
        const heroImages = [ALL_IMAGES.heroImage1, ALL_IMAGES.heroImage2, ALL_IMAGES.heroImage3];
        let currentIndex = 0;
        let autoPlayInterval = null;
        track.innerHTML = '';
        if (dotsContainer) dotsContainer.innerHTML = '';

        heroImages.forEach((src, i) => {
            track.innerHTML += `<div class="carousel-slide"><img src="${src}" alt="Producto destacado ${i + 1}"></div>`;
            if (dotsContainer) dotsContainer.innerHTML += `<div class="dot" data-index="${i}"></div>`;
        });

        const slides = Array.from(track.children);
        const dots = dotsContainer ? Array.from(dotsContainer.children) : [];
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');

        if (slides.length <= 1) return;

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
        };

        function goToSlide(index) {
            currentIndex = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => {
                let offset = i - currentIndex;
                if (offset < -1) offset += slides.length;
                if (offset > 1) offset -= slides.length;
                slide.style.transform = `translateX(${offset * 105}%) scale(0.85)`;
                slide.style.opacity = Math.abs(offset) > 0 ? 0.3 : 1;
                slide.style.zIndex = slides.length - Math.abs(offset);
            });
            slides[currentIndex].style.transform = 'translateX(0) scale(1)';
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
            resetAutoPlay();
        }

        if (dots.length > 0) {
            dotsContainer.addEventListener('click', e => {
                const dot = e.target.closest('.dot');
                if (dot) goToSlide(parseInt(dot.dataset.index));
            });
        }
        if (nextButton) nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        if (prevButton) prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
        
        track.addEventListener('click', e => {
            const slide = e.target.closest('.carousel-slide');
            if (slide) {
                const index = slides.indexOf(slide);
                if(index !== currentIndex) goToSlide(index);
            }
        });

        goToSlide(0);
    }
    function setupMobileNav() {
        const toggleButton = document.querySelector('.mobile-nav-toggle');
        const nav = document.querySelector('.main-nav');
        if (!toggleButton || !nav) return;

        toggleButton.addEventListener('click', () => {
            const isOpened = nav.classList.toggle('nav-open');
            toggleButton.setAttribute('aria-expanded', isOpened);
            document.body.classList.toggle('no-scroll', isOpened);
        });
    }
    function setupAccordion() {
        const accordionItems = document.querySelectorAll('.accordion-item');
        if (accordionItems.length === 0) return;

        accordionItems.forEach(item => {
            const trigger = item.querySelector('.accordion-trigger');
            const content = item.querySelector('.accordion-content');

            trigger.addEventListener('click', () => {
                const isOpened = item.classList.contains('is-open');
                
                accordionItems.forEach(i => {
                    i.classList.remove('is-open');
                    i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
                    i.querySelector('.accordion-content').style.maxHeight = null;
                });

                if (!isOpened) {
                    item.classList.add('is-open');
                    trigger.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }
    function createProductCard(product) {
        const link = document.createElement('a');
        link.href = `product-detail.html?product=${product.id}`;
        link.className = 'product-card-link reveal';
        link.innerHTML = `
            <div class="product-card">
                <div class="product-card-image">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                </div>
                <h3>${product.name}</h3>
            </div>
        `;
        return link;
    }

    function setupCategoryPages() {
        const categoryGrids = document.querySelectorAll('[id^="category-"]');
        if (categoryGrids.length === 0) return;

        categoryGrids.forEach(grid => {
            const subCategory = grid.id.replace('category-', '');
            const productsToDisplay = PRODUCTS.filter(p => p.subCategory === subCategory);
            productsToDisplay.forEach(product => {
                grid.appendChild(createProductCard(product));
            });
        });
    }

   
    function setupProductDetailPage() {
        const pdpContainer = document.querySelector('.pdp-container');
        if (!pdpContainer) return;
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('product');
        const product = PRODUCTS.find(p => p.id === productId);
        const relatedProductsSection = document.getElementById('related-products-section');

        if (!product) {
            pdpContainer.innerHTML = '<h1>Producto no encontrado</h1><p>El producto que buscás no existe o fue removido. <a href="index.html">Volver al inicio</a>.</p>';
            if (relatedProductsSection) relatedProductsSection.style.display = 'none';
            return;
        }
        document.title = `${product.name} - Tan Bonitos!`;
        document.querySelector('meta[name="description"]').setAttribute('content', product.description.replace(/<br>/g, ''));
        document.getElementById('pdp-name').textContent = product.name;
        document.getElementById('pdp-price').textContent = product.price;
        document.getElementById('pdp-description').innerHTML = `<p>${product.description}</p>`;
        document.getElementById('pdp-details-list').innerHTML = product.details.map(d => `<li>${d}</li>`).join('');

        const mainImageEl = document.getElementById('pdp-main-image');
        const thumbnailsEl = document.getElementById('pdp-thumbnails');
        const placeholderEl = document.querySelector('.pdp-placeholder');
        
        mainImageEl.style.display = 'block';
        mainImageEl.src = product.images[0];
        mainImageEl.alt = `Vista principal de ${product.name}`;
        if (placeholderEl) placeholderEl.style.display = 'none';
        
        thumbnailsEl.innerHTML = '';
        product.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.alt = `Vista ${index + 1} de ${product.name}`;
            if (index === 0) thumb.classList.add('active-thumbnail');
            thumb.addEventListener('click', () => {
                mainImageEl.src = imgSrc;
                thumbnailsEl.querySelector('.active-thumbnail')?.classList.remove('active-thumbnail');
                thumb.classList.add('active-thumbnail');
            });
            thumbnailsEl.appendChild(thumb);
        });

        const breadcrumb = document.getElementById('breadcrumb-link');
        if (breadcrumb) {
            breadcrumb.textContent = `‹ Volver a ${product.categoryName}`;
            breadcrumb.href = `${product.category}.html`;
        }

        const relatedGrid = document.getElementById('related-products-grid');
        const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4); // Limit to 4
        if (relatedProducts.length > 0 && relatedGrid) {
            relatedProducts.forEach(p => relatedGrid.appendChild(createProductCard(p)));
        } else if (relatedProductsSection) {
            relatedProductsSection.style.display = 'none';
        }
    }

    initializeSite();
});