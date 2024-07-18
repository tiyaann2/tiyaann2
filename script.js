
    function validateForm() {
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;
      var dob = new Date(document.getElementById('dob').value);
      var age = calculateAge(dob);
      var phoneNumber = document.getElementById('phoneNumber').value;
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      var usernamePattern = /^[a-z0-9_-]+$/;

      if (!usernamePattern.test(username)) {
        document.getElementById('usernameError').textContent = "Username must be in lowercase.";
        return false;
      } else {
        document.getElementById('usernameError').textContent = "";
      }

      if (age < 18) {
        alert("You must be 18+ to register.");
        return false;
      }

      var passwordPattern = /(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{8,}/;
      if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.");
        return false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      alert("Registration successful!\n\nName: " + firstName + " " + lastName + "\nEmail: " + email + "\nDate of Birth: " + dob.toDateString() + "\nPhone Number: " + phoneNumber + "\nUsername: " + username);
      return true;
    }

    function calculateAge(dob) {
      var today = new Date();
      var age = today.getFullYear() - dob.getFullYear();
      var monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    }
  