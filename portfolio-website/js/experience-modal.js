// Professional Experience Modal Functions
function openExperiencePage() {
    const transition = document.getElementById('transitionModal');
    const modal = document.getElementById('experienceModal');

    // Show red transition overlay with wipe-in
    if (transition) {
        transition.classList.add('show');
    }

    // After 400ms, hide overlay and open experience modal
    setTimeout(() => {
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Overlay wipes out above the modal
        if (transition) {
            transition.classList.remove('show');
            transition.classList.add('closing');

            // After closing animation, remove overlay
            setTimeout(() => {
                transition.classList.remove('closing');
            }, 350);
        }
    }, 400);
}

function closeExperiencePage() {
    const modal = document.getElementById('experienceModal');
    modal.classList.add('closing');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.classList.remove('closing');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 350);
}

// Close modal when clicking outside the modal-content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('experienceModal');
    if (e.target === modal) {
        closeExperiencePage();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeExperiencePage();
    }
});
