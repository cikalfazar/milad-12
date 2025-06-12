
let pageAlign = "right";

window.onload = function () {
    $('body').addClass('loaded');
}

bgCycle = $("body").backgroundCycle({
    imageUrls: [
        'img/motif-bg.png'
    ],
    fadeSpeed: 2000,
    duration: -1,
    backgroundSize: SCALING_MODE_COVER
});

$(document).ready(function () {
    $('.tm-section').fadeOut(0);
    $('.tm-section-0').fadeIn();

    adjustFooter();

});

function adjustFooter() {
    const windowHeight = $(window).height();
    const topHeight = $('.tm-top-container').height();
    const middleHeight = $('.tm-content').height();
    let contentHeight = topHeight + middleHeight;

    if (pageAlign === "left") {
        contentHeight += $('.tm-bottom-container').height();
    }

    if (contentHeight > windowHeight) {
        $('.tm-bottom-container').addClass('tm-static');
    } else {
        $('.tm-bottom-container').removeClass('tm-static');
    }
}

function goToApp() {
    window.location.href = "app.html";
}