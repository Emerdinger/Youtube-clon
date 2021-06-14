const showMenu = document.querySelector("#show-menu");
const showMenu2 = document.querySelector("#show-menu-2");
const sidebar = document.querySelector("#sidebar");

if (showMenu) {
    showMenu.addEventListener('click', (e) => {
        console.log('work')
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
    });
}

if (showMenu2) {
    showMenu2.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('work')
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
    });
}


// User Menu
const showUserMenu = document.querySelector('#user-profile-dropdown');
const showUserMenu2 = document.querySelector('#user-profile-dropdown-2');
const userMenu = document.querySelector('#user-menu');

if (showUserMenu) {
    showUserMenu.addEventListener('click', (e) => {
        if (userMenu.classList.contains('active')) {
            userMenu.classList.remove('active');
        } else {
            userMenu.classList.add('active')
        }
    });
}

if (showUserMenu2) {
    showUserMenu2.addEventListener('click', (e) => {
        if (userMenu.classList.contains('active')) {
            userMenu.classList.remove('active');
        } else {
            userMenu.classList.add('active')
        }
    });
}
