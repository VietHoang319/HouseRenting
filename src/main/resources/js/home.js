let content = $("#content")
let tokenKey = "token"
let token = "";
localStorage.setItem(tokenKey, JSON.stringify(token))
let userId = "";
localStorage.setItem("id", userId)
let userName = "";
localStorage.setItem("name", userName)
let modal = $("#exampleModal")
let modalBody = $("#modalBody")
let modalFooter = $("#modalFooter")
const API = "http://localhost:8080"

function showHome() {
    let str = `
    <div class="header fixed-top">
        <div class="col-12 navdiv">
            <!--            navbar-->
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <b><a class="navbar-brand" href="#" id="logo" onclick="showHome()">dinhcaothuenha.com</a></b>
<!--                Sparrow-->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
                        <li class="nav-item">
                            
                        </li>
                    </ul>
                    <button class="btn-nav btn-search" onclick="showSearchForm()"><i class="fa-solid fa-magnifying-glass"></i></button>`
    if (token === "") {
        str += `<button class="btn-nav" onclick="showLogin()">Đăng nhập</button>
                    <button class="btn-nav" onclick="showRegister()">Đăng ký</button>`
    } else {
        str += `<div class="dropdown title-username">
                      <button class="dropdown-toggle btn-nav" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">${localStorage.getItem("name")}</button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" onclick="showMyHouse()">Nhà của bạn</button>
<!--                        <button class="dropdown-item">Nhà đã thuê</button>-->
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
        <div class="row">
        </div>
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
                <div class="list-group panel">
                  <button onclick="findtop()">Top 5 nhà được thuê nhiều nhất</button>

                </div>
                
              </div>
            </div>
            <div class="col-10">
                <div id="content1">
                    <div class="row" id="list">
                    
                    </div>
                </div>
                <br>
                <div id="pageable">
                
                </div>
            </div>
        </div>
    </div>`
    content.html(str)
    findAll(0)
    findAllCategory()
    findAllBedroom()
    findAllBathroom()
}

function findAll(number) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/home?page=" + number,
        success: function (data) {
            display(data.content, true);
            pageable(data)
        }
    });
}

function findtop() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/houses/by-price-top2",
        success: function (data) {
            let content1 = $("#content1")
            let str = `<div class="row" id="list">

                    </div>`
            content1.html(str)
            display(data, true);
            $("#pageable").empty()
        }
    });
}

function display(data, flag) {
    let tbody = document.getElementById("list")
    let str = "";

    for (let i = 0; i < data.length; i++) {
        str += `<div class="col-xl-4 col-lg-6 mt-4 content">`
        if (flag == true) {
            str += `<div class="card" style="width: 18rem;" onclick="showOrderHouseDetail(${data[i].id}, ${data[i].owner.id}, ${data[i].status})">`
        } else {
            str += `<div class="card" style="width: 18rem;" onclick="showHouseDetail(${data[i].id})">`
        }
        str += `<img class="image-card" id="imageCard${i}" class="card-img-top" style="width: 100%; height: 200px" alt="...">
                      <div class="card-body">
                        <h3 class="card-title">${data[i].name}</h3>
                        <p><i class="fa-solid fa-location-dot"></i> ${data[i].address}</p>
                        <p class="card-text"><span><i class="fa-solid fa-bed"></i> ${data[i].bedroom} phòng ngủ</span>
                        <span><i class="fa-solid fa-bath"></i> ${data[i].bathroom} phòng tắm</span></p>
                        <p><h4>Giá: ${data[i].price} (bạt/đêm)</h4></p>
                      </div>
                    </div>
                </div>`
        getImageById(data[i].id, `imageCard${i}`)
    }
    tbody.innerHTML = str;
}

function getImageById(id, idCard) {
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/images/house/" + id,
        success: function (data) {
            console.log(data)
            document.getElementById(idCard).src = data.image
        }
    })
}

function showSearchForm() {
    modal.modal("show")
    let strBody = `<label style="color: black"> Nhập địa chỉ</label>
                    <input type="text" name="name" class="form-control" id="address" placeholder="Nhập địa chỉ cần tìm">
                    <label style="color: black"> Số phòng ngủ</label>
                    <input type="range" min="1" max="10" id="bedroom" value="1" oninput="changValBedroom()">
                    <p style="text-align: center" id="bedroomVal">1</p>
                    <label style="color: black"> Số phòng tắm</label>
                    <input type="range" min="1" max="3" id="bathroom" value="1" oninput="changValBathroom()">
                    <p style="text-align: center" id="bathroomVal">1</p>
                    <label style="color: black"> Nhập khoảng tiền</label>
                    <div class="row">
                        <div class="col-5">
                            <span><input type="number" min="1" id="startPrice" value="1"></span>
                        </div>
                        <div class="col-2">
                            <span></span>
                        </div>
                         <div class="col-5">
                            <span><input type="number" min="1" id="endPrice" value="10000000"></span>
                        </div>
                    </div>
                    <label style="color: black"> Nhập khoảng ngày</label>
                    <div class="row">
                        <div class="col-5">
                            <span><input type="date" id="dateBegin"></span>
                        </div>
                        <div class="col-2">
                            <span></span>
                        </div>
                         <div class="col-5">
                            <span><input type="date" id="dateEnd"></span>
                        </div>
                    </div>`
    modalBody.html(strBody)
    let strFooter = `<button type="button" class="btn btn-primary" onclick="searchByAll()">Tìm kiếm</button>`
    modalFooter.html(strFooter)
}

function changValBedroom() {
    document.getElementById("bedroomVal").innerText = document.getElementById("bedroom").value
}

function changValBathroom() {
    document.getElementById("bathroomVal").innerText = document.getElementById("bathroom").value
}

function searchByAll() {
    let address = document.getElementById("address").value;
    let startPrice = document.getElementById("startPrice").value;
    let endPrice = document.getElementById("endPrice").value;
    let bathroom = document.getElementById("bathroom").value;
    let bedroom = document.getElementById("bedroom").value;
    let dateBegin = document.getElementById("dateBegin").value;
    let dateEnd = document.getElementById("dateEnd").value;

    console.log(bathroom)
    console.log(bedroom)

    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/search-by-all?address=" + address + "&start=" + startPrice + "&end=" + endPrice + "&bathroom=" + bathroom + "&bedroom=" + bedroom + "&cus_begin=" + dateBegin + "&cus_end=" + dateEnd,
        success: function (data) {
            console.log(data)
            modal.modal("hide")
            display(data, true)
            $("#pageable").empty()
        }
    })
}

function pageable(data) {
    let pageable = $("#pageable")
    let number1 = data.pageable.pageNumber;
    let str = ``;
    if (data.content.length !== 0) {
        if (number1 - 1 >= 0) {
            $("#pageableNext").hide()
            str += `<button class="btn-nav" style="border: 1px solid black" onclick="findAll(${number1 - 1})">Trước</button> `;
        }
        str += data.pageable.pageNumber + 1 + "/" + data.totalPages
        if (number1 + 1 < data.totalPages) {
            $("#pageablePre").hide()
            str += `<button class="btn-nav" style="border: 1px solid black" onclick="findAll(${number1 + 1})">Sau</button>`;
        }
        pageable.html(str)
    }
}