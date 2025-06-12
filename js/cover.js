
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

    let nameTo = getUrlParameter("to");
    $("#nameTo").html(nameTo);

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

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};