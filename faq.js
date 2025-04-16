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
            
            // Close other open FAQ items
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
    
    // Log a message to confirm script is running
    console.log('FAQ script loaded successfully');
}); 