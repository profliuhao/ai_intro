document.addEventListener('DOMContentLoaded', function() {
  // Create navigation element with fixed positioning
  const navElement = document.createElement('div');
  navElement.style.position = 'fixed';
  navElement.style.top = '0';
  navElement.style.left = '0';
  navElement.style.width = '100%';
  navElement.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  navElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  navElement.style.padding = '18px 15px';
  navElement.style.textAlign = 'center';
  navElement.style.zIndex = '1000';
  navElement.style.backdropFilter = 'blur(5px)';
  
  // Navigation links HTML with improved styling
  navElement.innerHTML = `
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
      <a href="index.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">Home</a>
      <a href="ai_functions_presentation.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">What is AI?</a>
      <a href="ai_history_presentation.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">AI History</a>
      <a href="aigc_presentation.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">AIGC</a>
<!--      <a href="ai_talk_presentation.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">AI Talk</a> -->
      <a href="ai_learning_resources.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">Learning Resources</a>
      <a href="ai_image_generator.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">Image Generator</a>
      <a href="beautiful-tetris.html" style="text-decoration: none; color: #667eea; font-weight: bold; padding: 5px 15px; flex: 1; text-align: center; transition: all 0.3s ease;">AI Tetris</a>
    </div>
  `;
  
  // Add hover effect to links
  navElement.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f0f0f0';
      this.style.borderRadius = '5px';
      this.style.boxShadow = '0 2px 10px rgba(102, 126, 234, 0.15)';
      this.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.boxShadow = 'none';
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Insert at the beginning of the body
  const body = document.querySelector('body');
  body.insertBefore(navElement, body.firstChild);
  
  // Add padding to body to prevent content from being hidden under the fixed navbar
  document.body.style.paddingTop = '70px';
});
