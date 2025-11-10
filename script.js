// Select all necessary elements
const textInput = document.getElementById('textInput');
const checkButton = document.getElementById('checkButton');
const resultSection = document.getElementById('resultSection');
const analyzing = document.getElementById('analyzing');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const percentage = document.getElementById('percentage');

// When user clicks the "Check" button
checkButton.addEventListener('click', analyzeText);

// Also trigger when user presses "Enter"
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        analyzeText();
    }
});

function analyzeText() {
    const inputValue = textInput.value.trim();

    // If input is empty, show an alert
    if (inputValue === '') {
        alert('กรุณากรอกข้อความ!');
        return;
    }

    // Show the result section
    resultSection.classList.add('show');
    analyzing.classList.remove('hidden');
    resultCard.classList.remove('show');

    // Simulate analysis delay (2 seconds)
    setTimeout(() => {
        analyzing.classList.add('hidden');

        // Generate random percentage from 0–1000 (fun exaggeration)
        const randomPercentage = Math.floor(Math.random() * 1001);

        // Remove previous color class
        percentage.classList.remove('red', 'yellow', 'green');

        // Set result text and color based on score
        if (randomPercentage >= 0 && randomPercentage <= 50) {
            percentage.classList.add('green');
            resultCard.querySelector('h2').innerHTML =
                `ยินดีด้วยคุณ <span style="color: #00ff00;">ไม่เบียว</span>`;
        } else if (randomPercentage > 50 && randomPercentage <= 99) {
            percentage.classList.add('yellow');
            resultCard.querySelector('h2').innerHTML =
                `ยินดีด้วยคุณ <span style="color: #ffff00;">เบียวนิดหน่อย</span>`;
        } else {
            percentage.classList.add('red');
            resultCard.querySelector('h2').innerHTML =
                `ยินดีด้วยคุณ <span style="color: #ff0000;">โคตรเบียว</span>`;
        }

        // Animate the percentage number
        animateNumber(0, randomPercentage, 1000);

        // Show the result card
        resultCard.classList.add('show');
    }, 2000);
}

// Animate the number counting up smoothly
function animateNumber(start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smoother animation
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(start + (range * easeOutQuad));

        percentage.textContent = current + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}