// Select the button by its ID
let btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener('click', function () {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    try {
        // Get and trim the values from the input fields
        let name = document.getElementById("name").value.trim();
        let age = document.getElementById("age").value.trim();

        // Check if the name input is empty
        if (!name) {
            let message_try = "The name box can't be empty";
            throw new Error(message_try);
        }

        // Regular expression
        let nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        if (!nameRegex.test(name)) {
            throw new Error("The name can only contain letters and spaces");
        }

        // Check if the age input is empty
        if (!age) {
            let message_try = "The age box can't be empty";
            throw new Error(message_try);
        }

        // Convert age to an integer
        age = parseInt(age);

        // Validate that the age is a number
        if (isNaN(age)) {
            let message_try = "The age must be an integer value";
            throw new Error(message_try);
        }

        let valid_message = "";

        // Validate the age range
        if (age <= 0 || age > 120) {
            valid_message = "The age should be between (0 and 120]";
        } else if (age >= 18) {
            valid_message = `Hi ${name}, You are an adult, keep enjoying in the programming world`
        } else {
            valid_message = `Hi ${name}, You are underage, keep learning`;
        }

        // Log the message to the console
        console.log(valid_message);

        // Display the message inside the HTML element with id="text"
        document.getElementById("text").innerHTML = `<p>${valid_message}</p>`;
    }

    // Catch and display any error as an alert
    catch (error) {
        window.alert(error.message);
    }
});

