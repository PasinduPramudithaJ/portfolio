// Select the header element
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Change the number to adjust when the color changes
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'Images/portfolio.jpg', // Example image 1
        'Images/portfolio1.jpeg',  // Example image 2
        'Images/portfolio2.jpeg',   // Example image 3
        'Images/portfolio3.jpeg',   // Example image 4
        'Images/portfolio4.jpeg'
       
           
    ];
    
    let currentIndex = 0;
    const imageDiv = document.getElementById('portfolio');

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageDiv.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        imageDiv.style.backgroundSize = 'cover';
        imageDiv.style.backgroundPosition = 'center';
    }

    setInterval(changeBackgroundImage, 4500); // Change image every 1 second
});