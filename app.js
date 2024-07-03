//change color of the nav var when scrolling

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css("background", '#000');
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1)0px 4px 12px");
        }
        else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    });

    var navbarHeight = $(".navbar").outerHeight();
    $(".menus a").click(function (e) {
        var targetHref = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(targetHref).offset().top - navbarHeight
        }, 1000)
        e.preventDefault();
    });


    //mobile navbar

    const mobile = document.querySelector(".menu-toggle");
    const mobileLink = document.querySelector(".menus");

    mobile.addEventListener("click", function () {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    });

    mobileLink.addEventListener("click", function () {
        const menuBars = document.querySelector('.is-active');
        if (window.innerWidth <= 768 && menuBars) {
            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active");
        }
    })
})
// function flipCard(card) {
//     const isFlipped = card.classList.toggle('flipped');
//     const video = card.querySelector('.card-video');

//     if (isFlipped) {
//         video.play();
//     } else {
//         video.pause();
//         video.currentTime = 0; // Reset video to start
//     }
// }

// Variable to track if the video is playing
let isVideoPlaying = false;
let currentVideoPlayingId;

// Function to open the modal and start playing the video
function openVideoModal(id) {
    let video = document.getElementById('modalVideo' + id);
    let modal = document.getElementById('videoModal' + id);
    modal.style.display = 'block'; // Display the modal
    video.play(); // Start playing the video
    isVideoPlaying = true;
    currentVideoPlayingId = id;
    document.body.style.overflow = 'hidden';

    // Start observing the modal for visibility changes
    observer.observe(modal);
}

// Function to close the modal and pause the video
function closeVideoModal(id) {
    let video = document.getElementById('modalVideo' + id);
    let modal = document.getElementById('videoModal' + id);
    modal.style.display = 'none'; // Hide the modal
    video.pause(); // Pause the video
    isVideoPlaying = false;
    currentVideoPlayingId = null;
    document.body.style.overflow = 'auto';

    // Stop observing the modal for visibility changes
    observer.unobserve(modal);
}

// Create an IntersectionObserver to monitor visibility changes of the modal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Modal is out of view
            if (isVideoPlaying) {
                document.getElementById('modalVideo' + currentVideoPlayingId).pause();
                isVideoPlaying = false;
            }
        } else {
            // Modal is in view
            if (!isVideoPlaying) {
                document.getElementById('modalVideo' + currentVideoPlayingId).play();
                isVideoPlaying = true;
            }
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}




// whatsapp click
document.querySelectorAll('.package-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        const url = this.getAttribute('data-href');
        window.open(url, '_blank');
    });
});

document.querySelector('.bootcamp-btn').addEventListener('click', function () {
    const url = this.getAttribute('data-href');
    window.open(url, '_blank');
});


//gym card click 

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.client-click').forEach(function (card) {
        card.addEventListener('click', function () {
            window.location.href = card.getAttribute('data-href');
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.bootcamp-click').forEach(function (card) {
        card.addEventListener('click', function () {
            window.location.href = card.getAttribute('data-href');
        });
    });

});

