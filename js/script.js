const themeSlug = "ieee-sb-cek"; // Likely for theming purposes

// Clear form function (unchanged)
function clearForm(formId) {
  document.getElementById(formId).reset();
}

// Message listener for zoom adjustment (unchanged)
window.addEventListener("message", (event) => {
  if (event?.data?.zoom) {
    const mains = document.getElementsByTagName("main");
    for (let main of mains) {
      main.style.zoom = event?.data?.zoom;
    }
  }
}, false);

// DOMContentLoaded listener (improved)
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflowX = "hidden"; // Prevent horizontal scroll

  // Improved applyZoom function
  function applyZoom() {
    const vpTags = document.getElementsByClassName("yotako-main");

    for (let vp of vpTags) {
      const closestSize = vp.classList.value.match(/size_(\d+)/)?.[1];

      if (closestSize) {
        const parentElement = vp.parentElement;
        const zoom = window.innerWidth / parseInt(closestSize);

        // Use media queries for responsive zoom adjustments
        if (window.matchMedia("(max-width: 768px)").matches) {
          // Set a mobile-specific zoom level (adjust as needed)
          parentElement.style.zoom = 1.2;
        } else {
          parentElement.style.zoom = zoom;
        }
        break; // Assuming only one element needs adjustment
      }
    }
  }

  // Call applyZoom initially and on resize
  applyZoom();
  window.onresize = applyZoom;
});