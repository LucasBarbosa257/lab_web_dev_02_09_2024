function toggleMobileMenu() {
    let mobile_menu = document.getElementById('mobile-menu');

    if (mobile_menu.classList.contains('hidden')) {
        mobile_menu.classList.remove('hidden');
        mobile_menu.style.maxHeight = mobile_menu.scrollHeight + 'px';

    } else {
        mobile_menu.style.maxHeight = '0';

        setTimeout(() => {
            mobile_menu.classList.add('hidden');
        }, 300);
    }
}