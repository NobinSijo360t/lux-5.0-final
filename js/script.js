document.addEventListener('DOMContentLoaded', () => {
  // Prevent horizontal scrolling
  document.getElementsByTagName('body')[0].style.overflowX = "hidden";

  function applyZoom() {
    const vpTags = document.getElementsByClassName('yotako-main');
    let closest;

    // Determine the closest size class dynamically
    for (let vp of vpTags) {
      if (vp.offsetParent) { // Ensure element is visible
        vp.classList.forEach(c => {
          if (c.includes('size_')) {
            closest = parseInt(c.split('_')[1], 10); // Parse as integer
          }
        });
      }
    }

    // Avoid zooming if no valid size is found
    if (closest) {
      const zoom = window.innerWidth / closest;

      // Apply zoom if calculated correctly
      if (!isNaN(zoom)) {
        for (let vp of vpTags) {
          if (vp.offsetParent) {
            vp.parentElement.style.zoom = Math.min(1, zoom); // Limit zoom to 1 (no zoom out)
          }
        }
      }
    }
  }

  // Trigger zoom logic on window resize
  window.onresize = applyZoom;

  // Initial application of zoom logic
  applyZoom();
});
