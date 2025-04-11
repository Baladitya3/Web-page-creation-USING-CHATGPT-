// Show message when button is clicked
function showMessage() {
    alert("We offer the latest, high-quality appliances at unbeatable prices!");
  }
  
  // Handle form submission
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  });
  