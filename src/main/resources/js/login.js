function showLogin() {
    let str = `<div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo">Sparrow</a></b>
            </nav>
        </div>
    </div>


    <div id="login-div">
        <h3 >Đăng nhập</h3>

        <label for="username">Tên đăng nhập</label>
        <input type="text" placeholder="Nhập tên đăng nhập" id="username">

        <label for="password">Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" id="password">
        <button class="btn-login">Đăng nhập</button>
        <button class="btn-login" onclick="showRegister()">Đăng ký</button>
        <button class="btn-login"><i class="fa-brands fa-google"></i> Đăng nhập với Google</button>
    </div>`
    content.html(str)
}