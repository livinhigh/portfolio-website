// GEMS-SU Modal Functions
function openGemsSUModal() {
    const modal = document.getElementById('gemsSUModal');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeGemsSUModal() {
    const modal = document.getElementById('gemsSUModal');
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
    const gemsSUModal = document.getElementById('gemsSUModal');
    if (event.target === gemsSUModal) {
        closeGemsSUModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGemsSUModal();
    }
});
