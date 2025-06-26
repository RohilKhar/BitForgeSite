// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Toggle the active class on the answer
            answer.classList.toggle('active');
            
            // Toggle the active class on the toggle icon
            toggle.classList.toggle('active');
            
            // Close other open FAQ items (optional - comment out if you want multiple open at once)
            const allAnswers = document.querySelectorAll('.faq-answer');
            const allToggles = document.querySelectorAll('.faq-toggle');
            
            allAnswers.forEach(item => {
                if (item !== answer && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            allToggles.forEach(item => {
                if (item !== toggle && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        });
    });
});

// Mouse tracking effect for founder cards
document.addEventListener('DOMContentLoaded', () => {
    const founderCards = document.querySelectorAll('.founder-image');
    
    founderCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
            
            // Calculate tilt
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const rotateY = -((e.clientX - centerX) / (rect.width / 2)) * 5;
            const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}); 