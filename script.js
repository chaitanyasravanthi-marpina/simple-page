function showMessage() {
  alert("Hello! You clicked the button.");
}

// Optional: handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for submitting the form!");
});
