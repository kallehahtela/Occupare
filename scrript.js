document.addEventListener('DOMContentLoaded', function() {
    var searchBar = document.querySelector('.search-bar input');
    var body = document.body;

    searchBar.addEventListener('focus', function() {
        this.classList.add('active');
    });

    searchBar.addEventListener('blur', function() {
        this.classList.remove('active');
    });

    window.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target)) {
            searchBar.classList.remove('active');
        }
    });
});

function openNav() {
    document.getElementById("mobileNav").style.width = "250px"; // Set the width of the menu
}

function closeNav() {
    document.getElementById("mobileNav").style.width = "0"; // Close the menu by setting its width to 0
}

// Attach the openNav function to your menu icon
document.querySelector('.menu-icon').addEventListener('click', openNav);

// Function to toggle between Login and Logout
function toggleLoginLogout() {
    var loginLogoutLink = document.getElementById("loginLogoutLink");
    if (loginLogoutLink.innerHTML === "Login") {
        loginLogoutLink.innerHTML = "Logout";
        // Add login functionality or redirect
    } else {
        loginLogoutLink.innerHTML = "Login";
        // Add logout functionality or redirect
    }
}

// Attach this function to your login/logout link
document.getElementById("loginLogoutLink").addEventListener('click', toggleLoginLogout);