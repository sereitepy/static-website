function displayMessage(): void {
  document.getElementById("message")!.textContent =
    "Hello, this is a sample message!";
}

// Ensure this function is accessible from the HTML
(window as any).displayMessage = displayMessage;
