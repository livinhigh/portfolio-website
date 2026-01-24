// Education & Skills Modal Functions
function openEducationPage() {
    const transition = document.getElementById('transitionModal');
    const modal = document.getElementById('educationModal');

    // Show red transition overlay with wipe-in
    if (transition) {
        transition.classList.add('show');
    }

    // After 400ms, hide overlay and open education modal
    setTimeout(() => {
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        setupModalTabs();

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

function closeEducationPage() {
    const modal = document.getElementById('educationModal');
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
    const modal = document.getElementById('educationModal');
    if (e.target === modal) {
        closeEducationPage();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEducationPage();
    }
});

// Initialize tabs when modal opens
function setupModalTabs() {
    const tabs = document.querySelectorAll('.modal-tab');
    const contents = document.querySelectorAll('.modal-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}
