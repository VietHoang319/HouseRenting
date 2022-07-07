let content = $("#content")
const API = "http://localhost:8080"

function showHome() {
    let str = `
    <div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo">Sparrow</a></b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <!--                    <button class="btn btn-outline-success" type="submit">Search</button>-->
                    <button class="btn-nav" onclick="showLogin()">Đăng nhập</button>
                    <button class="btn-nav" onclick="showRegister()">Đăng ký</button>
                </div>
            </nav>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div class="container">
        <div class="row">
            <!--        dropdown-->
            <div class="col-2">
                <div class="dropdown">
                    <div class="accordion dropdownTitle"><p class="link dropdownTitle">Chọn lọc theo:</p></div>
                    <ul id="accordion" class="accordion">
                        <li>
                            <div class="link">Loại phòng<i class="fa fa-chevron-down"></i>
                            </div>
                            <ul class="submenu">
                                <li><a href="#">Photoshop</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="link">Số phòng ngủ<i class="fa fa-chevron-down"></i></div>
                            <ul class="submenu">
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">jQuery</a></li>
                                <li><a href="#">Ruby</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="link"></i>Số phòng tắm<i class="fa fa-chevron-down"></i>
                            </div>
                            <ul class="submenu">
                                <li><a href="#">Tablet</a></li>
                                <li><a href="#">Mobile</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-10">
                    <div class="row">
<!--                    Thông tin-->
                        <div class="col-4 mt-4 content">
                            <div class="card" style="width: 18rem;">
                              <img class="image-card" src="https://nhadepsang.com.vn/images/2017/08/20-hinh-anh-noi-bat-cho-mau-nha-dep-1-tang-o-nong-thon-3.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h3 class="card-title">Tên</h3>
                                <p><i class="fa-solid fa-location-dot"></i>  Địa chỉ</p>
                                <p class="card-text"><span><i class="fa-solid fa-bed"></i> phòng ngủ</span>
                                <span><i class="fa-solid fa-bath"></i> phòng tắm</span></p>
                                <p><h4>Giá tiền</h4></p>
                              </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>`
    content.html(str)
}

showHome()