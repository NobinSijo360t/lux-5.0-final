const themeSlug = "ieee-sb-cek"; // Optional theme slug

function clearForm(formId) {
  document.getElementById(formId).reset();
}

window.addEventListener("message", (event) => {
  if (event?.data?.zoom) {
    const mains = document.querySelectorAll('main');
    for (const main of mains) {
      main.style.zoom = event?.data?.zoom;
    }
  }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflowX = "hidden"; // Set overflowX on body

  function applyZoom() {
    const vpTags = document.querySelectorAll('.yotako-main');

    for (const vp of vpTags) {
      if (vp.offsetParent) {
        const zoomClass = vp.classList.value.match(/size_(\d+)/)?.[1]; // Extract size from class
        if (zoomClass) {
          const closest = parseFloat(zoomClass); // Ensure numerical conversion
          const parentElement = vp.parentElement;
          parentElement.style.zoom = window.innerWidth / closest;
        }
      }
    }
  }

  window.onresize = applyZoom;

  applyZoom(); // Call applyZoom immediately for initial responsiveness
});
