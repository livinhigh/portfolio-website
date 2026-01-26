// Loading animation
const loadingText = document.getElementById('loading-text');
const loadingDiv = document.getElementById('loading');
const contentDiv = document.getElementById('content');

const lines = [
    "~/dev/ivan-portfolio> pip install ivan-resume",
    "Collecting ivan-resume...",
    "Resolving dependencies...",
    "Preparing virtual environment...",
    "Linking projects...",
    "Fetching skills graph...",
    "Optimizing build artifacts...",
    "Running tests...",
    "Packaging portfolio bundle...",
    "Deploying static assets...",
    "Done. Launching..."
];

function typeFirstLine(text) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            loadingText.textContent += text.charAt(i);
            i += 1;
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, 20);
    });
}

function appendLine(text) {
    const span = document.createElement('span');
    span.textContent = text + '\n';
    span.style.opacity = '0.6';
    loadingText.appendChild(span);
}

function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function loadTexts() {
    await typeFirstLine(lines[0]);
    loadingText.textContent += '\n';

    for (const line of lines.slice(1)) {
        appendLine(line);
        await delay(120 + Math.random() * 20); //change this
    }

    loadingDiv.classList.add('fade');
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        contentDiv.style.display = 'block';
    }, 750);
}

loadTexts();
