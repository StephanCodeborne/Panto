// Header And Main sections

const header = document.getElementById('header');
const headerCatalog = document.getElementById('header-catalog');

const h1 = document.querySelector('main h1');
const mainDescription = document.querySelector('main .section-description');
const searchContainer = document.querySelector('.search-container');


window.addEventListener('scroll', () => {
    startAnimation(0.5, whyChooseUs, whyChooseUsAnimation);
    startAnimation(0.4, bestSellers, bestSellersAnimation);
    startAnimation(0.4, experiences, experiencesAnimation);
    startAnimation(0.4, materials, materialsAnimation);
    startAnimation(0.4, reviewsSection, reviewsAnimation);
});



window.addEventListener('load', () => {
    header.style.transform = 'translateY(0)';
    header.style.opacity = 1;

    
        h1.style.transform = 'translateY(0) scale(1)'; 
        h1.style.opacity = 1;

        mainDescription.style.transform = 'translateY(0)'; 
        mainDescription.style.opacity = 1;        
       
        searchContainer.style.transform = 'translateY(0)'; 
        searchContainer.style.opacity = 1;
        
    
})

headerCatalog.addEventListener('click', () => {
    headerCatalog.classList.toggle('active');
});




// Why Choose Us section
const whyChooseUs = document.getElementById('why-choose-us');

function startAnimation(windowRatio, element, func) {
    const triggerBottom = window.innerHeight * windowRatio;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
        func();
    }
}

function whyChooseUsAnimation() {
    const h2_WhyChooseUs = document.querySelector('#why-choose-us h2');
    const h3_advantages = document.querySelectorAll('.advantage h3');
    const descriptions = document.querySelectorAll('.advantage-description');
    const moreInfoButtons = document.querySelectorAll('.advantage .more-info');


    h2_WhyChooseUs.style.transform = 'translateX(0) scale(1)'; 
    h2_WhyChooseUs.style.opacity = 1;

    h3_advantages.forEach((h3, idx) => {
        const timeOut = 400 + (idx * 100 - 100);
        setTimeout(() => {
            h3.style.transform = 'translateY(0)';
            h3.style.opacity = 1;

            setTimeout(() => {
                descriptions[idx].style.transform = 'translateY(0)';
                descriptions[idx].style.opacity = 1;

                setTimeout(() => {
                    moreInfoButtons[idx].style.transform = 'translateY(0)';
                    moreInfoButtons[idx].style.opacity = 1;
                    
                    setTimeout(() => {
                        moreInfoButtons[idx].style.transition = '0.2s ease-out';
                    }, 500);
                    
                }, 100);

            }, 100);

        }, timeOut);
    });
}



// Best Sellers section

const bestSellers = document.getElementById('best-sellers')
const categoryCover = document.querySelector('.cover');
const activeCategory = document.querySelector('.category.active');
const categories = document.querySelectorAll('.category');

categoryCover.style.width = `${window.getComputedStyle(activeCategory).getPropertyValue('width')}`

let currentTranslatePos = 0;

categories.forEach(category => {
    category.addEventListener('click', () => {
        const activeCategory = document.querySelector('.category.active');

        activeCategory.classList.remove('active');
        category.classList.add('active');
        
        categoryCover.style.width = `${window.getComputedStyle(category).getPropertyValue('width')}`;
        
        const coverLeftPos = categoryCover.getBoundingClientRect().left;
        const categoryLeftPos = category.getBoundingClientRect().left;

        
        currentTranslatePos += categoryLeftPos - coverLeftPos;
        categoryCover.style.transform = `translateX(${currentTranslatePos}px)`;
    });
});





const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const products = document.querySelectorAll('.product-card');
const productsContainer = document.querySelector('.products-container');

const productsMaxWidth = parseFloat( window.getComputedStyle(productsContainer).getPropertyValue('max-width'));
const productMarginValue = window.getComputedStyle(products[0]).getPropertyValue('margin');
const productMargin = Number(productMarginValue.replace(/[^\d.-]/g, ''));

let currentTranslate = 0;

nextButton.addEventListener('click', () => {
    currentTranslate -= productsMaxWidth - productMargin * 2;
    products.forEach(product => {
        product.style.transform = `translateX(${currentTranslate}px)`;
    });

    prevButton.disabled = false;

    const maxTranslate = products.length * (productsMaxWidth - productMargin * 2);

    if (currentTranslate <= maxTranslate) {
        nextButton.disabled = true;
    }
});



prevButton.addEventListener('click', () => {
    currentTranslate += productsMaxWidth - productMargin * 2;
    products.forEach(product => {
        product.style.transform = `translateX(${currentTranslate}px)`;
    });

    nextButton.disabled = false;

    if (currentTranslate === 0) {
        prevButton.disabled = true;
    }
});


function bestSellersAnimation() {
    const h2_BestSellers = document.querySelector('#best-sellers h2');
    const categorySellectionTab = document.querySelector('.category-sellection-tab');
    const viewMoreButton = document.querySelector('#best-sellers .view-more');

    h2_BestSellers.style.transform = 'translateX(0) scale(1)';
    h2_BestSellers.style.opacity = 1;

    categorySellectionTab.style.transform = 'translateX(0) scale(1)';
    categorySellectionTab.style.opacity = 1;

    
    productsContainer.style.transform = 'translateY(0)';
    productsContainer.style.opacity = 1;

    setTimeout(() => {
        viewMoreButton.style.transform = 'translateY(0)';
        viewMoreButton.style.opacity = 1;

        setTimeout(() => {
            viewMoreButton.style.transition = '0.2s ease-out';
        }, 500);
    }, 200);
}




//Experiences section



function experiencesAnimation() {
    const experiencesImage = document.querySelector('#experiences .section-image');
    const experiencesTitle = document.querySelector('#experiences .section-title');
    const h2_experiences = document.querySelector('#experiences h2');
    const experiencesDescription = document.querySelector('#experiences .section-description');
    const experiencesButton = document.querySelector('#experiences .more-info');

    experiencesImage.style.transform = 'translateX(0) scale(1)';
    experiencesImage.style.opacity = 1;

    experiencesTitle.style.transform = 'translateX(0) scale(1)';
    experiencesTitle.style.opacity = 1;

    h2_experiences.style.transform = 'translateX(0) scale(1)';
    h2_experiences.style.opacity = 1;

    experiencesDescription.style.transform = 'translateX(0) scale(1)';
    experiencesDescription.style.opacity = 1;

    setTimeout(() => {
        experiencesButton.style.transform = 'translateX(0) scale(1)';
        experiencesButton.style.opacity = 1;

        setTimeout(() => {
            experiencesButton.style.transition = '0.2s ease-out';
        }, 700);

    }, 300);
    
}





//Materials section

function materialsAnimation() {
    const materialsImages = document.querySelectorAll('#materials .section-image');
    const materialsTitle = document.querySelector('#materials .section-title');
    const h2_materials = document.querySelector('#materials h2');
    const materialsDescription = document.querySelector('#materials .section-description');
    const materialsButton = document.querySelector('#materials .more-info');

    materialsImages.forEach(image => {
        image.style.transform = 'translateX(0) scale(1)';
        image.style.opacity = 1;
    });

    materialsTitle.style.transform = 'translateX(0) scale(1)';
    materialsTitle.style.opacity = 1;

    h2_materials.style.transform = 'translateX(0) scale(1)';
    h2_materials.style.opacity = 1;
    
    materialsDescription.style.transform = 'translateX(0) scale(1)';
    materialsDescription.style.opacity = 1;

    setTimeout(() => {
        materialsButton.style.transform = 'translateX(0) scale(1)';
        materialsButton.style.opacity = 1;

        setTimeout(() => {
            materialsButton.style.transition = '0.2s ease-out';
        }, 700);

    }, 300);

        


    
}



//Reviews section 

const reviewsSection = document.getElementById('reviews');
const nextButton2 = document.getElementById('next2');
const prevButton2 = document.getElementById('prev2');
const reviews = document.querySelectorAll('.review-card');
const reviewsContainer = document.querySelector('.reviews-container');

const reviewsMaxWidth = parseFloat( window.getComputedStyle(productsContainer).getPropertyValue('max-width'));
// const productMarginValue = window.getComputedStyle(products[0]).getPropertyValue('margin');
// const productMargin = Number(productMarginValue.replace(/[^\d.-]/g, ''));

currentTranslate = 0;

nextButton2.addEventListener('click', () => {
    currentTranslate -= reviewsMaxWidth;
    reviews.forEach(review => {
        review.style.transform = `translateX(${currentTranslate}px)`;
    });

    prevButton2.disabled = false;

    const maxTranslate = productsMaxWidth;

    if (currentTranslate <= maxTranslate) {
        nextButton2.disabled = true;
    }
});



prevButton2.addEventListener('click', () => {
    currentTranslate += reviewsMaxWidth ;
    reviews.forEach(review => {
        review.style.transform = `translateX(${currentTranslate}px)`;
    });

    nextButton2.disabled = false;

    if (currentTranslate === 0) {
        prevButton2.disabled = true;
    }
});


function reviewsAnimation() {
    const h2_reviews = document.querySelector('#reviews h2');
    const reviewsTitle = document.querySelector('#reviews .section-title');

    reviewsTitle.style.transform = 'translateX(0) scale(1)';
    reviewsTitle.style.opacity = 1;

    reviewsContainer.style.transform = 'translateX(0) scale(1)';
    reviewsContainer.style.opacity = 1;

    h2_reviews.style.transform = 'translateX(0) scale(1)';
    h2_reviews.style.opacity = 1;
}
