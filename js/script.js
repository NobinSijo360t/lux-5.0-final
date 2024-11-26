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
  // Wait for images and other resources to load before applying zoom
  window.addEventListener('load', () => {
    document.body.style.overflowX = "hidden"; // Set overflowX on body

    function applyZoom() {
      const vpTags = document.querySelectorAll('.yotako-main');

      for (const vp of vpTags) {
        if (vp.offsetParent) {
          const zoomClass = vp.classList.value.match(/size_(\d+)/)?.[1];
          if (zoomClass) {
            const closest = parseFloat(zoomClass);
            vp.parentElement.style.setProperty('zoom', window.innerWidth / closest, 'important');
            vp.parentElement.style.margin = '0';  // Reset margins
            vp.parentElement.style.padding = '0';  // Reset padding
          }
        }
      }
    }

    window.onresize = applyZoom;

    applyZoom(); // Call applyZoom after resources are loaded
  });
});
