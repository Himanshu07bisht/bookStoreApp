// Select the menu icon element from the DOM
var menuIcon = document.querySelector(".menu-icon");

// Select the sidebar element from the DOM
var sidebar = document.querySelector(".sidebar");

// Add a click event listener to the menu icon
menuIcon.onclick = function() {
    // Toggle the 'small-sidebar' class on the sidebar element
    sidebar.classList.toggle("small-sidebar");
}
function agreeToTerms() {
    // Add your own terms and conditions logic here
    // For example, you can display a popup or redirect to a terms page
    alert("You agree to our terms and conditions.");
    // After agreement, redirect to the main content page
    window.location.href = "main-content-page.html";
  }