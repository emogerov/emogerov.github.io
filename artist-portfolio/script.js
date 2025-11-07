// Artwork Data
const artworks = [
    {
        id: 1,
        title: "Geometric Harmony",
        dimensions: "70x50 cm",
        category: "Категория 1",
        image: "assets/artwork-abstract-1.jpg"
    },
    {
        id: 2,
        title: "Emotional Depths",
        dimensions: "50x70 cm",
        category: "Категория 2",
        image: "assets/artwork-portrait-1.jpg"
    },
    {
        id: 3,
        title: "Mountain Serenity",
        dimensions: "100x60 cm",
        category: "Категория 3",
        image: "assets/artwork-landscape-1.jpg"
    },
    {
        id: 4,
        title: "Colorful Flow",
        dimensions: "80x80 cm",
        category: "Категория 1",
        image: "assets/artwork-abstract-2.jpg"
    },
    {
        id: 5,
        title: "Blooming Elegance",
        dimensions: "50x70 cm",
        category: "Категория 4",
        image: "assets/artwork-still-life-1.jpg"
    },
    {
        id: 6,
        title: "Urban Perspective",
        dimensions: "70x50 cm",
        category: "Категория 5",
        image: "assets/artwork-urban-1.jpg"
    },
    {
        id: 7,
        title: "Colorful Flow 2",
        dimensions: "80x80 cm",
        category: "Категория 1",
        image: "assets/artwork-abstract-2.jpg"
    },
    {
        id: 8,
        title: "Colorful Flow 3",
        dimensions: "80x80 cm",
        category: "Категория 1",
        image: "assets/artwork-abstract-2.jpg"
    }
];

// Initialize the page
function init() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Render gallery sections
    renderGallery();
    
    // Render filtered gallery
    renderFilteredGallery();
    
    // Add modal click outside to close
    const modal = document.getElementById('image-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Add escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
}

// Render gallery sections
function renderGallery() {
    const categories = ["Категория 1", "Категория 2", "Категория 3", "Категория 4", "Категория 5"];
    
    categories.forEach((category, index) => {
        const categoryArtworks = artworks.filter(artwork => artwork.category === category);
        const gridId = `category-${index + 1}-grid`;
        const grid = document.getElementById(gridId);
        
        if (grid) {
            grid.innerHTML = categoryArtworks.map(artwork => `
                <div class="artwork-card" onclick='openModal(${JSON.stringify(artwork)})'>
                    <div class="artwork-image-container">
                        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
                    </div>
                    <div class="artwork-info">
                        <h3 class="artwork-title">${artwork.title}</h3>
                        <p class="artwork-dimensions">${artwork.dimensions}</p>
                    </div>
                </div>
            `).join('');
        }
    });
}

// Render filtered gallery (shows all artworks initially)
function renderFilteredGallery() {
    const grid = document.getElementById('filtered-grid');
    
    if (grid) {
        grid.innerHTML = artworks.map(artwork => `
            <div class="artwork-card" data-category="${artwork.category}" onclick='openModal(${JSON.stringify(artwork)})'>
                <div class="artwork-image-container">
                    <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
                </div>
                <div class="artwork-info">
                    <h3 class="artwork-title">${artwork.title}</h3>
                    <p class="artwork-dimensions">${artwork.dimensions}</p>
                </div>
            </div>
        `).join('');
    }
}

// Filter gallery by category
function filterGallery(category) {
    const cards = document.querySelectorAll('#filtered-grid .artwork-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Open image modal
function openModal(artwork) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDimensions = document.getElementById('modal-dimensions');
    const modalCategory = document.getElementById('modal-category');
    
    modalImage.src = artwork.image;
    modalImage.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalDimensions.textContent = `Dimensions: ${artwork.dimensions}`;
    modalCategory.textContent = artwork.category;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
