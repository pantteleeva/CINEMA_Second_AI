/* KinoStream — main script */

document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Carousel navigation
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const prevBtn = carousel.querySelector('.carousel__btn--prev');
    const nextBtn = carousel.querySelector('.carousel__btn--next');

    if (!track) return;

    const scrollAmount = 400;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });

  // Search overlay
  const searchBtn = document.querySelector('.search-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const closeSearch = document.querySelector('.close-search');
  const searchInput = document.querySelector('.search-box input');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }
  if (closeSearch) {
    closeSearch.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });
  }

  // Mobile burger menu
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      burger.classList.toggle('open');
    });
  }

  // Movie cards click → go to movie page
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.dataset.href || 'movie.html';
      window.location.href = link;
    });
  });

  // Tabs on movie page
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Filter checkboxes (demo)
  document.querySelectorAll('.filter-checkbox input').forEach(input => {
    input.addEventListener('change', () => {
      // In real app — filter the grid
      console.log('Filter changed:', input.value, input.checked);
    });
  });
});
