// Timeline interaction handler
function handleTimelineClick(eventId) {
    // Trigger transition modal
    const transitionModal = document.getElementById('transitionModal');
    transitionModal.classList.add('show');
    
    // After closing animation, remove overlay
    setTimeout(() => {       
        // Handle different timeline events
        switch(eventId) {
            case '2017-gic':
            case '2018-gic-travel':
                openGemsSUModal();
                break;
            case '2018-start':
            case '2022-graduation':
            case '2025-msc':
                openEducationPage();
                break;
            case '2020-hackathon':
                openDakshModal();
                break;
            case 'peldano':
            case 'cinde-ai':
                openExperiencePage();
                break;
            default:
                break;
        } // Match transition animation duration
        transitionModal.classList.remove('show');
        transitionModal.classList.add('closing');
        setTimeout(() => {
            transitionModal.classList.remove('closing');
        }, 350);
    }, 350);
}

// Timeline auto-scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    
    if (timelineWrapper) {
        // Auto-scroll animation from left to right
        let scrollAmount = 0;
        let scrollDirection = 1; // 1 for right, -1 for left
        const scrollStep = 0.2; // Slower speed (reduced from 0.5)
        const maxScroll = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;

        // Initial scroll to show first item
        setTimeout(() => {
            timelineWrapper.scrollLeft = 0;
        }, 500);

        // Continuous auto-scroll animation
        const autoScrollInterval = setInterval(() => {
            scrollAmount += scrollStep * scrollDirection;

            // Reverse direction when reaching ends
            if (scrollAmount >= maxScroll) {
                scrollAmount = maxScroll;
                scrollDirection = -1;
            } else if (scrollAmount <= 0) {
                scrollAmount = 0;
                scrollDirection = 1;
            }

            timelineWrapper.scrollLeft = scrollAmount;
        }, 30);

        // Stop auto-scroll when user manually scrolls
        timelineWrapper.addEventListener('wheel', function() {
            clearInterval(autoScrollInterval);
        }, { once: true });

        timelineWrapper.addEventListener('touchstart', function() {
            clearInterval(autoScrollInterval);
        }, { once: true });
    }
});
