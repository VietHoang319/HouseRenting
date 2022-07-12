function showLogin() {
    let str = `<div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo" onclick="showHome()">dinhcaothuenha.com</a></b>
<!--                Sparrow-->
            </nav>
        </div>
    </div>
    <div id="login-div">
        <h3 >Đăng nhập đi còn gì</h3>
        <label for="username">Tên đăng nhập</label>
        <input type="text" placeholder="Nhập tên đăng nhập" id="username">
        <label for="password">Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" id="password">
        <button class="btn-login" onclick="login()">Đăng nhập</button>
        <button class="btn-login" onclick="showRegister()">Đăng ký</button>
<!--        <button class="btn-login"><i class="fa-brands fa-google"></i> Đăng nhập với Google</button>-->
    </div>`
    content.html(str)
}

function login(){
    let usn = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
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
            token = data.accessToken
            id = data.id
            name = data.username
            localStorage.setItem(tokenKey, JSON.stringify(token))
            localStorage.setItem("id", JSON.stringify(data.id))
            localStorage.setItem("name", data.username)
            showHome()
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function logout(){
    token=""
    userId=""
    userName=""
    localStorage.setItem("token", token)
    localStorage.setItem("id", userId)
    localStorage.setItem("name", userName)
    showHome()
    // localStorage.removeItem('token');
}