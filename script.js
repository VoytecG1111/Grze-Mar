document.addEventListener("DOMContentLoaded", function() {
    const galleryBtn = document.getElementById("galeriaBtn");
    const columny1 = document.getElementById("columny");
    const carouselContainer = document.getElementById("carouselContainer");
    const ofertaContainer = document.getElementById("ofertaContainer");

    if (galleryBtn && carouselContainer && columny1) {
        galleryBtn.addEventListener("click", function(event) {
            event.preventDefault();
            columny1.style.visibility ="hidden";
            columny1.style.opacity = "0";
            columny1.style.display = "none";
            ofertaContainer.style.visibility ="hidden";
            ofertaContainer.style.opacity = "0";
            ofertaContainer.style.display = "none";
            carouselContainer.style.visibility = "visible";
            carouselContainer.style.opacity = "1";
            carouselContainer.style.display = "block";
            //carouselContainer.style.display = "flex"; // Ensure it follows Bootstrap layout
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("homeBtn");
    const columny1 = document.getElementById("columny");
    

    if (homeBtn && carouselContainer && columny1) {
        homeBtn.addEventListener("click", function(event) {
            event.preventDefault();
            //carouselContainer.style.opacity = "0"; // Show the carousel
            carouselContainer.style.visibility = "hidden";
            carouselContainer.style.opacity = "0";
            carouselContainer.style.display = "none";
            columny1.style.visibility ="visible";
            columny1.style.opacity = "1";
            columny1.style.display = "block";
            columny1.style.display = "flex";
            ofertaContainer.style.visibility ="visible";
            ofertaContainer.style.opacity = "1";
            ofertaContainer.style.display = "block";
        });
    }
});

document.querySelectorAll('.carousel-item-custom').forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Only for mobile
            this.classList.toggle('expanded');
        }
    });
});