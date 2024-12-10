document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('startupForm');
  const pitch = document.getElementById('pitch');
  const wordCount = document.getElementById('wordCount');

  // Add this at the beginning of your script
  const particlesContainer = document.querySelector('.particles');
  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particlesContainer.appendChild(particle);
  }

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
      e.preventDefault();
      
      const startupName = document.getElementById('startupName').value;
      const email = document.getElementById('email').value;
      const pitchText = pitch.value;

      alert('Thanks for your submission!\n\nStartup: ' + startupName + '\nPitch: ' + pitchText);
      form.reset();
  });
});