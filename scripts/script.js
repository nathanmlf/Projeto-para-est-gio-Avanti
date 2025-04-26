const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const indicators = document.querySelectorAll(".indicator");

// Number of items visible at once (based on CSS)
const itemsPerView = 5;
// Total number of items
const totalItems = document.querySelectorAll(".carousel-item").length;
// Calculate number of pages
const totalPages = Math.ceil(totalItems / itemsPerView);

let currentPage = 0;

// Update carousel position
function updateCarousel() {
  const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
  carousel.style.transform = `translateX(-${
    currentPage * itemWidth * itemsPerView
  }px)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentPage);
  });
}

// Previous button click
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
});

// Next button click
nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(totalItems / itemsPerView) - 1) {
    currentPage++;
    updateCarousel();
  }
});

// Indicator clicks
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentPage = index;
    updateCarousel();
  });
});

// Handle window resize
window.addEventListener("resize", updateCarousel);

// Initial setup
updateCarousel();
