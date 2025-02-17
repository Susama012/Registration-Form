document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let user = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        birthDate: document.getElementById("birthDate").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        address: document.getElementById("address").value,
        country: document.getElementById("country").value,
        postalCode: document.getElementById("postalCode").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    document.getElementById("registrationForm").reset();
});