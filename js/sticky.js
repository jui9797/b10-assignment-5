// console.log('sticky js connected');

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
   
    
    // Change background color when scrolled
    if (window.scrollY > 50) {
        header.classList.add('bg-pink-100','bg-opacity-50');
        
    } else {
        header.classList.remove('bg-pink-100', 'bg-opacity-50');
    }
});