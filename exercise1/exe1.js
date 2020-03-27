document.addEventListener("DOMContentLoaded", () => {
    let field1 = document.querySelector("#first_field")
    let field2 = document.querySelector("#second_field")
    document.querySelector("#Validate").addEventListener("click", () => {
        let password1 = String(field1.value)
        let password2 = String(field2.value)
        console.log(typeof (password1))
        console.log(password1)
        console.log(password2)
        if (password1 == password2 && password1.length >= 8) {
            alert("Password is valid")
        }
        else if (password1 == password2 && password1.length < 8) {
            alert("The passwords are not at least 8 characters long")
        }
        else {
            alert("The passwords entered don't match")
        }
    })
})
