function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the trimmed values from the input fields
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();
    // Concatenate first name and last name
    const fullName = `${firstName} ${lastName}`;
    // Display the full name using alert
    alert(fullName);
}

