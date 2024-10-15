document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon'); 
    const navLinks = document.querySelectorAll('.navlinks, .navlinks-log'); 

    if (menuIcon && closeIcon && navLinks.length > 0) {
        menuIcon.addEventListener('click', () => {
            console.log("Menu icon clicked"); 
            navLinks.forEach(link => {
                link.classList.toggle('is-active'); 
            });
            menuIcon.style.display = 'none'; 
            closeIcon.style.display = 'block'; 
        });

        
        closeIcon.addEventListener('click', () => {
            console.log("Close icon clicked"); 
            navLinks.forEach(link => {
                link.classList.toggle('is-active'); 
            });
            closeIcon.style.display = 'none'; 
            menuIcon.style.display = 'block';
        });
    } else {
        console.error("Menu icon, close icon, or navigation links not found.");
    }
});
