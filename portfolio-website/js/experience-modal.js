// Professional Experience Modal Functions
function openExperiencePage() {
    // Trigger transition modal
    const transitionModal = document.getElementById('transitionModal');
    transitionModal.classList.add('show');

    setTimeout(() => {
        const modal = document.getElementById('experienceModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Match transition animation duration
        setTimeout(() => {
            transitionModal.classList.remove('show');
            transitionModal.classList.add('closing');
            setTimeout(() => {
                transitionModal.classList.remove('closing');
            }, 350);
        }, 350);
    }, 350);

}

function closeExperiencePage() {
    const modal = document.getElementById('experienceModal');
    if(modal.style.display === 'block') {
        modal.classList.add('closing');
        modal.classList.remove('show');
        
        setTimeout(() => {
            modal.classList.remove('closing');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 350);
    }
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
