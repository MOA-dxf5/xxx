// xxx JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const helloBtn = document.getElementById('helloBtn');
    const messageDiv = document.getElementById('message');
    
    helloBtn.addEventListener('click', function() {
        const messages = [
            'Hello from xxx!',
            'Welcome to your new app!',
            'This is working perfectly!',
            'App Management rocks!'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageDiv.innerHTML = `<h3 style="color: #667eea;">${randomMessage}</h3>`;
        
        messageDiv.style.transform = 'scale(0.8)';
        setTimeout(() => {
            messageDiv.style.transform = 'scale(1)';
        }, 100);
    });
});