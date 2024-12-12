document.addEventListener('DOMContentLoaded', function() {
    const pitch = document.querySelector('textarea[name="pitch"]');
    const wordCount = document.getElementById('wordCount');
    const form = document.querySelector('form');

    // Create success animation element
    const successAnimation = document.createElement('div');
    successAnimation.className = 'success-animation';
    successAnimation.innerHTML = `
        <div class="success-content">
            <div class="success-emoji">🚀</div>
            <p class="success-message">Your application has been submitted!</p>
        </div>
    `;
    document.body.appendChild(successAnimation);

    // Word count
    pitch.addEventListener('input', function() {
        const words = pitch.value.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;
        
        if (words.length > 10) {
            pitch.value = words.slice(0, 10).join(' ');
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        // Show success animation
        successAnimation.classList.add('show');
        
        // Hide animation after 2 seconds
        setTimeout(() => {
            successAnimation.classList.remove('show');
        }, 2000);
    });
});