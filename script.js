const text = document.querySelector(".second-text");

const loadText = () => {
       setTimeout(() => {
        text.textContent = " A Web Developer";
       }, 0);

       setTimeout(() => {
        text.textContent = " A UI/UX Aspirer";
       }, 4000);

       setTimeout(() => {
        text.textContent = " A Content Strategist";
       }, 8000);

       setTimeout(() => {
        text.textContent = " An SEO Specialist";
       }, 12000);
}

loadText();
setInterval(loadText, 16000);

function openFullScreen(imageUrl) {
       var modal = document.getElementById("imageModal");
       var modalImg = document.getElementById("fullScreenImage");
   
       modal.style.display = "block";
       modalImg.src = imageUrl;
     }

      // Function to close the modal
  function closeFullScreen() {
       var modal = document.getElementById("imageModal");
       modal.style.display = "none";
     }
   
     // Add an event listener to each image with the "3dModelling" filter
     var images = document.querySelectorAll(".filter.center.3dModelling img");
     images.forEach(function (image) {
       image.addEventListener("click", function () {
         openFullScreen(image.src);
       });
     });
   
     // Close the modal when the close button is clicked
     var closeButton = document.querySelector(".close");
     closeButton.addEventListener("click", closeFullScreen);


     document.addEventListener("DOMContentLoaded", function () {
      const modalOverlay = document.getElementById("modalOverlay");
      const modalImage = document.getElementById("modalImage");
      const closeButton = document.getElementById("closeButton");
    
      // Get all clickable images
      const clickableImages = document.querySelectorAll(".gallery-item img");
    
      // Add click event listeners to each clickable image
      clickableImages.forEach(function (img) {
        img.addEventListener("click", function () {
          modalImage.src = this.src;
          modalOverlay.style.display = "block";
        });
      });
    
      // Close the modal when the close button is clicked
      closeButton.addEventListener("click", function () {
        modalOverlay.style.display = "none";
      });
    
      // Close the modal when clicking outside the modal content
      modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
          modalOverlay.style.display = "none";
        }
      });
    
      // Close the modal with the Escape key
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          modalOverlay.style.display = "none";
        }
      });
    });