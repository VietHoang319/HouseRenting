function showRegister() {
    let str = `<div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo" onclick="showRegister()">Sparrow</a></b>
            </nav>
        </div>
    </div>
    <div id="login-div">
        <h3 >Đăng ký</h3>
        <label for="username">Tên đăng nhập</label>
        <input type="text" placeholder="Nhập tên đăng nhập" id="username">
        <label for="password">Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" id="password">
        <label for="rePassword">Nhập lại mật khẩu</label>
        <input type="password" placeholder="Nhập lại mật khẩu" id="rePassword">
        <label for="phone">Số điện thoại</label>
        <input type="tel" placeholder="Nhập số điện thoại" id="phone">
        <button class="btn-login" onclick="register()">Đăng ký</button>
        <button class="btn-login" onclick="showLogin()">Đăng nhập</button>
    </div>`
    content.html(str)
}

function register() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("rePassword").value
    let phone = document.getElementById("phone").value
    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: API + "/register",
        data: JSON.stringify(user),
        success: function () {
            let strBody = `<p>Đăng ký thành công</p>`
            modalBody.html(strBody)
            let strFooter = `<button type="button" class="btn btn-primary" data-dismiss="modal" id="btn-save" onclick="closeModalRegister()" >Save changes</button>`
            modalFooter.html(strFooter)
            modal.modal("show")
        },
        error: function (error) {
            console.log(error)
        },
    })
}

function closeModalRegister() {
    showLogin()
}