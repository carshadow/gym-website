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
let isPackageModalOpen = false;
let isGymModalOpen = false;
let isBeachModalOpen = false;

// Function to open the package modal
function openPackageModal() {
    let packageModal = document.getElementById('packageModal');
    packageModal.style.display = 'block'; // Display the package modal
    isPackageModalOpen = true;
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body
}

// Function to close the package modal
function closePackageModal() {
    let packageModal = document.getElementById('packageModal');
    packageModal.style.display = 'none'; // Hide the package modal
    isPackageModalOpen = false;
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
}

// Event listeners to open and close package modal when clicking package buttons
document.querySelectorAll('.package-btn').forEach(button => {
    button.addEventListener('click', openPackageModal);
});

// Close package modal when clicking on the close button
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', closePackageModal);
});

// Close package modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    let packageModal = document.getElementById('packageModal');
    if (event.target === packageModal) {
        closePackageModal();
    }
});

// Close package modal on pressing Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isPackageModalOpen) {
        closePackageModal();
    }
});

// Function to open the gym modal
function openGymModal(modalId) {
    let gymModal = document.getElementById('GymModal' + modalId);
    gymModal.style.display = 'block'; // Display the gym modal
    isGymModalOpen = true;
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body
}

// Function to close the gym modal
function closeGymModal(modalId) {
    let gymModal = document.getElementById('GymModal' + modalId);
    gymModal.style.display = 'none'; // Hide the gym modal
    isGymModalOpen = false;
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
}

// Event listener for the button to open Gym Modal 2
document.getElementById('openGymModalButton').addEventListener('click', () => openGymModal('2'));

// Close Gym Modal 2 when clicking on the close button (X)
document.querySelector('#GymModal2 .close').addEventListener('click', () => closeGymModal('2'));

// Close Gym Modal 2 when clicking outside of the modal content
window.addEventListener('click', (event) => {
    let gymModal = document.getElementById('GymModal2');
    if (event.target === gymModal) {
        closeGymModal('2');
    }
});

// Close Gym Modal 2 on pressing Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isGymModalOpen) {
        closeGymModal('2');
    }
});

// Function to open the beach modal
function openBeachModal(modalId) {
    let beachModal = document.getElementById('BeachModal' + modalId);
    beachModal.style.display = 'block'; // Display the beach modal
    isBeachModalOpen = true;
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body
}

// Function to close the beach modal
function closeBeachModal(modalId) {
    let beachModal = document.getElementById('BeachModal' + modalId);
    beachModal.style.display = 'none'; // Hide the beach modal
    isBeachModalOpen = false;
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
}

// Event listener for the button to open Beach Modal 3
document.querySelector('.program-detail button').addEventListener('click', () => openBeachModal('3'));

// Close Beach Modal 3 when clicking on the close button (X)
document.querySelector('#BeachModal3 .close').addEventListener('click', () => closeBeachModal('3'));

// Close Beach Modal 3 when clicking outside of the modal content
window.addEventListener('click', (event) => {
    let beachModal = document.getElementById('BeachModal3');
    if (event.target === beachModal) {
        closeBeachModal('3');
    }
});

// Close Beach Modal 3 on pressing Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isBeachModalOpen) {
        closeBeachModal('3');
    }
});

//Coach readME

function toggleReadMore() {
    const longText = document.querySelector('.long-text');
    const btn = document.querySelector('.read-more-btn');

    if (longText.style.display === 'block') {
        longText.style.display = 'none';
        btn.textContent = 'Leer más';
    } else {
        longText.style.display = 'block';
        btn.textContent = 'Leer menos';
    }
}



// whatsapp click
function sendWhatsApp(packageName) {
    // Replace with your WhatsApp number and encoded message
    const phone = "17874231472"; // Replace with your WhatsApp number
    const message = encodeURIComponent(`Hola, me interesa el paquete de ${packageName} en MBFitness.`);

    // Construct the WhatsApp link
    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank');
}

// Function to open the modal
function openPackageModal() {
    document.getElementById('packageModal').style.display = "block";
}

// Function to close the modal
function closePackageModal() {
    document.getElementById('packageModal').style.display = "none";
}


document.querySelector('.bootcamp-btn').addEventListener('click', function () {
    const url = this.getAttribute('data-href');
    window.open(url, '_blank');
});


//gym card click 

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gym-click').forEach(function (card) {
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

document.addEventListener('DOMContentLoaded', function () {
    const programSection = document.querySelector('.program');
    const programDetails = document.querySelectorAll('.program-detail');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    programDetails.forEach(detail => {
                        detail.style.opacity = '1';
                    });
                }, 1500); // 2 seconds delay
            } else {
                programDetails.forEach(detail => {
                    detail.style.opacity = '0';
                });
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(programSection);
});