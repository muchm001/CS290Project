function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
        // temporarily disable interactivity
        disableInteraction();
        // Update the "old" adjacent slides with "new" ones
        var newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
        // Test if carousel has more than three items
        if ((totalItems - 1) > 3) {
            // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
                oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)){
                oldNext = 0;
            }
            // Checks and updates if slide is at the beginning/end
            if (slide === 0) {
                newPrevious = (totalItems - 1);
                oldPrevious = (totalItems - 2);
                oldNext = (slide + 1);
            } else if (slide === (totalItems -1)) {
                newPrevious = (slide - 1);
                newNext = 0;
                oldNext = 1;
            }
            // Now we've worked out where we are and where we're going,
            // by adding/removing classes we'll trigger the transitions.
            // Reset old next/prev elements to default classes
            items[oldPrevious].className = itemClassName;
            items[oldNext].className = itemClassName;
            // Add new classes
            items[newPrevious].className = itemClassName + " prev";
            items[slide].className = itemClassName + " active";
            items[newNext].className = itemClassName + " next";
        }
    }
}

function initCarousel() {
    setInitialClasses();
    setEventListeners();
    // Set moving to false so that the carousel becomes interactive
    moving = false;
}

// make it rain
initCarousel();