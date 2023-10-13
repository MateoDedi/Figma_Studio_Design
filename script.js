document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.querySelector('.menu-list');
    let menuOpen = false;

    menuToggle.addEventListener('click', function() {
        if (!menuOpen) {
            menuList.style.display = 'block';
            menuToggle.classList.add('active'); // Add "active" class
            menuOpen = true;
        } else {
            menuList.style.display = 'none';
            menuToggle.classList.remove('active'); // Remove "active" class
            menuOpen = false;
        }
    });
});