function getFormvalue(event) {
  event.preventDefault();

  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();

  if (!firstName && !lastName) {
    alert("Please enter your full name.");
    return;
  }

  const fullName = `${firstName} ${lastName}`.trim();
  alert(fullName);
}
