document.addEventListener('DOMContentLoaded', () => {
  // Prevent horizontal scrolling
  document.body.style.overflowX = "hidden";

  function applyZoom() {
    const vpTags = document.getElementsByClassName('yotako-main');
    let closestSize = Infinity;

    // Find the smallest valid size class (size_XXX) dynamically
    for (let vp of vpTags) {
      if (vp.offsetParent) { // Ensure the element is visible
        vp.classList.forEach(className => {
          if (className.startsWith('size_')) {
            const size = parseInt(className.split('_')[1], 10);
            if (!isNaN(size)) {
              closestSize = Math.min(closestSize, size);
            }
          }
        });
      }
    }

    // Calculate zoom ratio only if a valid size is found
    if (closestSize !== Infinity) {
      const zoom = window.innerWidth / closestSize;

      // Apply zoom, limiting it to a maximum of 1 (no zoom-out)
      for (let vp of vpTags) {
        if (vp.offsetParent) {
          vp.parentElement.style.transformOrigin = "0 0"; // Keep consistent scaling
          vp.parentElement.style.transform = `scale(${Math.min(1, zoom)})`;
        }
      }
    }
  }

  // Update zoom dynamically on window resize
  window.addEventListener('resize', applyZoom);

  // Apply zoom on initial load
  applyZoom();
});
