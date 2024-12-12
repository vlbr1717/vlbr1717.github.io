document.addEventListener('DOMContentLoaded', function() {
    const pitch = document.querySelector('textarea[name="pitch"]');
    const wordCount = document.getElementById('wordCount');

    // Word count
    pitch.addEventListener('input', function() {
        const words = pitch.value.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;
        
        if (words.length > 10) {
            pitch.value = words.slice(0, 10).join(' ');
        }
    });
});