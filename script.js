document.querySelector('.enter-button').addEventListener('click', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
  
    // Create a swipe effect
    const swipeTransition = document.createElement('div');
    swipeTransition.classList.add('transition');
    document.body.appendChild(swipeTransition);
  
    // Wait for the transition to finish
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainContent.style.display = 'flex';
  
      // Add VHS filter for dramatic effect
      const vhsFilter = document.createElement('div');
      vhsFilter.classList.add('vhs-filter');
      document.body.appendChild(vhsFilter);
  
      // Remove swipe effect after delay
      setTimeout(() => {
        swipeTransition.remove();
      }, 1500);
    }, 1500);
  });
  