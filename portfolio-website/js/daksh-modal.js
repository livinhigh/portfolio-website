// Daksh Modal Functions
function openDakshModal() {
    const modal = document.getElementById('dakshModal');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
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
