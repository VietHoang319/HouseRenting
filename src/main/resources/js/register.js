function showRegister() {
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
        <h3 >Đăng ký ngay lập tức đi</h3>
        <label for="username">Tên đăng nhập</label>
        <input type="text" placeholder="Nhập tên đăng nhập" id="username">
        <p style="color: black" id="errorUsername"></p>
        <label for="password">Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" id="password">
        <p style="color: black" id="errorPassword"></p>
        <label for="rePassword">Nhập lại mật khẩu</label>
        <input type="password" placeholder="Nhập lại mật khẩu" id="rePassword">
        <p style="color: black" id="errorRePassword"></p>
        <label for="phone">Số điện thoại</label>
        <input type="tel" placeholder="Nhập số điện thoại" id="phone">
        <p style="color: black" id="errorPhone"></p>
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

    let errorUsername = $("#errorUsername")
    let errorPassword = $("#errorPassword")
    let errorRePassword = $("#errorRePassword")
    let errorPhone = $("#errorPhone")

    errorUsername.text("")
    errorPassword.text("")
    errorRePassword.text("")
    errorPhone.text("")

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
            console.log(error.responseJSON.errors)
            errorUsername.text(error.responseJSON.errors.username)
            errorPhone.text(error.responseJSON.errors.password)
            errorRePassword.text(error.responseJSON.errors.confirmPassword)
            errorPhone.text(error.responseJSON.errors.phone)
        },
    })
}

function closeModalRegister() {
    showLogin()
}