document.addEventListener('DOMContentLoaded', function() {
    // Handle chapter toggles
    const chapterToggles = document.querySelectorAll('.chapter-toggle');
    
    chapterToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Close all other chapter contents
            document.querySelectorAll('.chapter-content').forEach(chapter => {
                if (chapter !== content) {
                    chapter.style.display = 'none';
                }
            });
            
            // Toggle current chapter content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Handle play button click
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Add video playback functionality here
            console.log('Play button clicked');
        });
    }

    // Add smooth scrolling for register button
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add registration functionality or smooth scroll to form
            console.log('Register button clicked');
        });
    });
});