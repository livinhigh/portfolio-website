// Daksh Modal Functions
function openDakshModal() {
    
    // Trigger transition modal
    const transitionModal = document.getElementById('transitionModal');
    transitionModal.classList.add('show');
    
    setTimeout(() => {
        const modal = document.getElementById('dakshModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            transitionModal.classList.remove('show');
            transitionModal.classList.add('closing');
            setTimeout(() => {
                transitionModal.classList.remove('closing');
            }, 350);
        }, 350);
    }, 350);
}

function closeDakshModal() {
    const modal = document.getElementById('dakshModal');
    if (modal && modal.style.display === 'block') {
        modal.classList.add('closing');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.remove('closing');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 350);
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const dakshModal = document.getElementById('dakshModal');
    if (event.target === dakshModal) {
        closeDakshModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDakshModal();
    }
});
