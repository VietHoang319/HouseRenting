function showRegister() {
    let str = `<div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo">Sparrow</a></b>
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
        <button class="btn-login">Đăng ký</button>
        <button class="btn-login" onclick="showLogin()">Đăng nhập</button>
    </div>`

    content.html(str)
}