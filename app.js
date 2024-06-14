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

