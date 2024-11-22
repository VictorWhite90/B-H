






























// customers reveiw

// let reviews = document.getElementById('reviews');
// let arrayOfreviews = [
//     {
//         name: "John Doe",
//         role: "Homeowner",
//         image: "images/reviewer1.jpg",
//         review: "Brains & Hammers delivered a beautiful and affordable home that exceeded our expectations. Their team is incredibly professional and attentive to details!"
//     },
//     {
//         name: "Jane Smith",
//         role: "Investor",
//         image: "images/reviewer2.jpg",
//         review: "Investing with Brains & Hammers has been a game-changer for my portfolio. Their properties bring high ROI and reliable growth!"
//     },
//     {
//         name: "David Lee",
//         role: "Business Owner",
//         image: "images/reviewer3.jpg",
//         review: "The commercial spaces offered by Brains & Hammers are exactly what I was looking for. Perfect location, quality, and design!"
//     },
//     {
//         name: "Davidx Lees",
//         role: "Business Owner",
//         image: "images/reviewer3.jpg",
//         review: "The commercial spaces offered by Brains & Hammers are exactly what I was looking for. Perfect location, quality, and design!"
//     },
//     {
//         name: "Janes Smitht",
//         role: "Investor",
//         image: "images/reviewer2.jpg",
//         review: "Investing with Brains & Hammers has been a game-changer for my portfolio. Their properties bring high ROI and reliable growth!"
//     },
//     {
//         name: "Johna Doeh",
//         role: "Homeowner",
//         image: "images/reviewer1.jpg",
//         review: "Brains & Hammers delivered a beautiful and affordable home that exceeded our expectations. Their team is incredibly professional and attentive to details!"
//     }
// ];







// let current = 0;

// setInterval(() => {
//     // Format the current review data as HTML
//     reviews.innerHTML = `
//         <div class="review-card">
//             <img src="${arrayOfreviews[current].image}" alt="${arrayOfreviews[current].name}" class="review-image">
//             <h4>${arrayOfreviews[current].name}</h4>
//             <p><strong>${arrayOfreviews[current].role}</strong></p>
//             <p>${arrayOfreviews[current].review}</p>
//         </div>
//     `;

//     // Move to the next review, reset if we reach the end
//     current++;
//     if (current === arrayOfreviews.length) {
//         current = 0;
//     }
// }, 5000);



 // slide fade
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }
    
    // Function to add the "visible" class to elements in view
    function revealSections() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', revealSections);
    
    // Initial check in case some sections are already in view
    revealSections();
    
    


let currentSlide = 0;

function moveSlide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = sliderContainer.children.length;

    // Update the current slide index
    currentSlide = currentSlide + direction;

    // Prevent sliding out of bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 7; // Last batch (7 images visible)
    } else if (currentSlide > totalSlides - 7) {
        currentSlide = 0; // Reset to the first set
    }

    // Move the slider by setting the transform
    sliderContainer.style.transform = `translateX(-${currentSlide * (100 / 7)}%)`;
}




document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const video = document.getElementById("aboutVideo");
  const image = document.getElementById("aboutImage");

  playButton.addEventListener("click", () => {
    // Hide the image and play button
    playButton.style.display = "none";
    image.style.display = "none";

    // Show the video and start playback
    video.style.display = "block";
    video.play();
  });
});


