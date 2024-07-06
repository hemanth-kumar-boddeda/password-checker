let password = document.getElementById("password");
let power = document.getElementById("power-point");
let feedback = {
    length: document.getElementById("length"),
    lowercase: document.getElementById("lowercase"),
    uppercase: document.getElementById("uppercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
};

password.oninput = function() {
    let strength = 0;
    let value = password.value;

    // Check for lowercase letters
    if (value.match(/[a-z]/)) {
        strength += 1;
        feedback.lowercase.style.color = "green";
    } else {
        feedback.lowercase.style.color = "red";
    }

    // Check for uppercase letters
    if (value.match(/[A-Z]/)) {
        strength += 1;
        feedback.uppercase.style.color = "green";
    } else {
        feedback.uppercase.style.color = "red";
    }

    // Check for numbers
    if (value.match(/[0-9]/)) {
        strength += 1;
        feedback.number.style.color = "green";
    } else {
        feedback.number.style.color = "red";
    }

    // Check for special characters
    if (value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        strength += 1;
        feedback.special.style.color = "green";
    } else {
        feedback.special.style.color = "red";
    }

    // Check for length
    if (value.length >= 8) {
        strength += 1;
        feedback.length.style.color = "green";
    } else {
        feedback.length.style.color = "red";
    }

    // Determine strength and set appropriate styles
    let widthPower = ["20%", "40%", "60%", "80%", "100%"];
    let colorPower = ["red", "yellow", "yellow", "yellow", "green"];
    let text = ["Password is very weak", "Password is weak", "Password is moderate", "Password is good", "Password is strong"];

    power.style.width = widthPower[strength - 1];
    power.style.backgroundColor = colorPower[strength - 1];
    document.getElementById("text").innerHTML = text[strength - 1];
}
