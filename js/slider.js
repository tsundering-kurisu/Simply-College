let currentIndex = 0;
    const slidesPerRow = 2; // Number of slides visible at a time
    const totalSlides = document.querySelectorAll('.slide').length;
    
    function changeRow(direction) {
      const slider = document.querySelector('.slider');
      const slideWidth = document.querySelector('.slide').offsetWidth;
      const maxIndex = Math.ceil(totalSlides / slidesPerRow) - 1;
    
      currentIndex += direction;
    
      // Prevent going out of bounds
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
    
      slider.style.transform = `translateX(-${currentIndex * slidesPerRow * slideWidth}px)`;
    }