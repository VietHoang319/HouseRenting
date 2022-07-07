
const API = "http://localhost:8080"

function login() {

    let usn = document.getElementById("usern").value;
    let pw = document.getElementById("passw").value;
    let user = {
        username: usn,
        password: pw,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: 'POST',
        url: API + "/login",
        data: JSON.stringify(user),
        success: function (data) {
            alert("duoc roi di thoi")
            console.log(data)
            localStorage.setItem('token',data.accessToken);
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function register() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("passCheck").value
    let phone =document.getElementById("phone").value
    let user = {
        username : username,
        password : password,
        confirmPassword : confirmPassword,
        phone : phone
    }
    console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: API+"/register",
        data: JSON.stringify(user),
        success: function () {
            alert("duoc roi")

        },
        error: function (error) {
            console.log("lỗi")
            console.log(error)
        },
    })
}



function logout(){
    localStorage.removeItem('token');

}