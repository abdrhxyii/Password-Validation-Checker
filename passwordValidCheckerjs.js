const passInputField = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const passwordList = document.querySelectorAll(".pass-requirements li");

const requirement = [
    {regex: /.{8,}/, index: 0}, // Minimum 8 characters
    {regex: /[0-9]/, index: 1}, // Between 0 to 9
    {regex: /[a-z]/, index: 2}, // Any lowercase between a - z
    {regex: /[^A-Za-z0-9]/, index: 3}, // Without A-Za-z0-9 (special characters)
    {regex: /[A-Z]/, index: 4}  // One uppercase
];

passInputField.addEventListener("keyup", (e) => {
    requirement.forEach(items => {
        //Checking password matches the requirement regex
        const isValid = items.regex.test(e.target.value);
        const requirementItem = passwordList[items.index];

        //icon will change when requirement mathched or not 
        //if mathched fa-check  else fa-circle
        
        if (isValid) {
            requirementItem.firstElementChild.className = "fas fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fas fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    //password = hidden with *****
    if (passInputField.type === "password"){

        //when clicked below two code will be executed
        passInputField.setAttribute("type","text");
        eyeIcon.classList.add("fa-eye-slash")
        eyeIcon.classList.remove("fa-eye")

    }else{

        passInputField.setAttribute("type","password");
        eyeIcon.classList.add("fa-eye")
        eyeIcon.classList.remove("fa-eye-slash")
    }
});

