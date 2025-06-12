function displayGallery() {
    let item = ``;
    for (let i = 1; i <= 15; i++) {
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