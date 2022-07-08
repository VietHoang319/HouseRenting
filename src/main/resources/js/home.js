let content = $("#content")
let tokenKey = "token"
let token = "";
localStorage.setItem(tokenKey, token)
let userId = "";
localStorage.setItem("id", JSON.stringify(userId))
let userName = "";
localStorage.setItem("name", userName)
const API = "http://localhost:8080"

showHome()

function showHome() {
    let str = `
    <div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo" onclick="showHome()">Sparrow</a></b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
                        <li class="nav-item">
                            
                        </li>
                    </ul>
                    <button class="btn-nav btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>`
        if(token === "") {
            str += `<button class="btn-nav" onclick="showLogin()">Đăng nhập</button>
                    <button class="btn-nav" onclick="showRegister()">Đăng ký</button>`
        } else {
            str += `<div class="dropdown title-username">
                      <button class="dropdown-toggle btn-nav" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">${localStorage.getItem("name")}</button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" onclick="showMyHouse()">Nhà của bạn</button>
                        <button class="dropdown-item">Nhà đã thuê</button>
                        <button class="dropdown-item" onclick="logout()">Đăng xuất</button>
                      </div>
                    </div>`
        }

                str += `</div>
            </nav>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div class="container">
        <div class="row" id="content0">
            <!--        dropdown-->
            <div class="col-2">
              <div id="MainMenu" class="mt-4">
                <div class="list-group panel">
                  <button href="#listCategory" class="list-group-item list-group-item-success header-dropdown" data-toggle="collapse" data-parent="#MainMenu">Loại phòng <i class="fa fa-caret-down" style="float: right"></i></button>
                  <div class="collapse" id="listCategory">
                  
                  </div>
                </div>
                
                <div class="list-group panel">
                  <button href="#listBedroom" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Số phòng ngủ <i class="fa fa-caret-down"  style="float: right"></i></button>
                  <div class="collapse" id="listBedroom">
                  
                  </div>
                </div>
                
                <div class="list-group panel">
                  <button href="#listBathroom" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Số nhà tắm <i class="fa fa-caret-down"  style="float: right"></i></button>
                  <div class="collapse" id="listBathroom">
                  
                  </div>
                </div>
              </div>
            </div>
            <div class="col-10">
                <div id="content1">
                    <div class="row" id="list">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>`
    content.html(str)
    findAll()
    findAllCategory()
    findAllBedroom()
    findAllBathroom()
}

function findAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/home",
        success: function (data) {
            console.log(data);
            display(data.content);
        }
    });
}

function display(data) {
    let tbody = document.getElementById("list")
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `<div class="col-4 mt-4 content">
                            <div class="card" style="width: 18rem;" onclick="showOrderHouseDetail(${data[i].id})">
                              <img class="image-card" src="https://nhadepsang.com.vn/images/2017/08/20-hinh-anh-noi-bat-cho-mau-nha-dep-1-tang-o-nong-thon-3.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h3 class="card-title">${data[i].name}</h3>
                                <p><i class="fa-solid fa-location-dot"></i> ${data[i].address}</p>
                                <p class="card-text"><span><i class="fa-solid fa-bed"></i> ${data[i].bedroom} phòng ngủ</span>
                                <span><i class="fa-solid fa-bath"></i> ${data[i].bathroom} phòng tắm</span></p>
                                <p><h4>Giá: ${data[i].price} (bạt/đêm)</h4></p>
                              </div>
                            </div>
                        </div>`
    }
    tbody.innerHTML = str;
}



