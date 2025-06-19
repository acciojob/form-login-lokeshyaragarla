function getFormvalue(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();

  // Check if fields are empty
  if (!firstName && !lastName) {
    alert("Please enter your full name.");
    return;
  }

  const fullName = `${firstName} ${lastName}`.trim();
  alert(fullName);
}

