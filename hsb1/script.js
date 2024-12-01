// Select the menu icon element from the DOM
var menuIcon = document.querySelector(".menu-icon");

// Select the sidebar element from the DOM
var sidebar = document.querySelector(".sidebar");

// Add a click event listener to the menu icon
menuIcon.onclick = function() {
    // Toggle the 'small-sidebar' class on the sidebar element
    sidebar.classList.toggle("small-sidebar");
}
