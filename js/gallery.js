function displayGallery() {
    let item = ``;
    for (let i = 1; i <= 10; i++) {
        if (
            i == 4 ||
            i == 6 ||
            i == 8 ||
            i == 14 ||
            i == 11
        ) {
            continue;
        }
        item += `
        <figure class="effect-goliath tm-gallery-item">
        <img src="img/${i}.jpg" alt="_DSC8154">
        <figcaption>
                    
                        <p>View More</p>
                        <a href="img/${i}.jpg">View more</a>
                        </figcaption>
                        </figure>`;
    }

    $("#tmGallery").html(item);
}

displayGallery();