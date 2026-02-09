function toggleMenu() {
    var menu = document.querySelector('.menu');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Закрыть при клике вне меню
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.menu-btn');
    
    if (event.target !== btn && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});