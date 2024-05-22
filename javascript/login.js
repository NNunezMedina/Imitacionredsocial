const users = [
    {
        username: "Nathaly1393",
        password: "123456",
    },
    {
        username: "Victor2289",
        password: "456789",
    }
]

let inputUsername = document.querySelector('#input_username')
let inputPassword = document.querySelector('#input_password')
let logInButton = document.querySelector('#login_button')
let invalidUsername = document.querySelector('#invalid_username')
let invalidPawwsord = document.querySelector('#invalid_password')

function getUser(event) {
    event.preventDefault();
    const username = inputUsername.value;
    const password = inputPassword.value;
    const user = users.find(u => u.username === username);
        if (!user) {
            invalidUsername.classList.remove('disapear')
            invalidUsername.classList.add('appear')
         } else if(user.password !== password) {
            inputPassword.classList.remove('disapear')
            invalidPawwsord.classList.add('appear')
        } else {
            alert("Log in successful!")
        }
    }

    
    logInButton.addEventListener("click",getUser)
