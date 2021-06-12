const showMenu = document.querySelector("#show-menu");
const sidebar = document.querySelector("#sidebar");

showMenu.addEventListener('click', (e) => {
    if(sidebar.classList.contains('active')){
        sidebar.classList.remove('active');
    }else{
        sidebar.classList.add('active');
    }
});

// User Menu
const showUserMenu = document.querySelector('#user-profile-dropdown');
const userMenu = document.querySelector('#user-menu');

showUserMenu.addEventListener('click', (e) => {
    if(userMenu.classList.contains('active')){
        userMenu.classList.remove('active');
    }else{
        userMenu.classList.add('active')
    }
});
