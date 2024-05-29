// Single function definition
function displayMessage() {
    document.getElementById("message").textContent =
        "Hello, this is a sample message!";
}
// Ensure this function is accessible from the HTML
window.displayMessage = displayMessage;
