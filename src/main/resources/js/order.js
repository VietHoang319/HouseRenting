function showOrderHouseDetail(id) {
    let content1 = $("#content1")
    let str = `<div class="row mt-4">
                <div class="col-11 info-frame" style="margin: 0 5% 3% 5%">
                    <div id="infoFrame">
                        
                    </div>
                    <div class="row mt-4 mb-4">
                        <div class="col-12">`
    if (token === "") {
        str += `<button class="btn-nav btn-order" type="button" style="width: 100%" onclick="showLogin()">Thuê nhà</button>`
    } else {
        str += `<button class="btn-nav btn-order" type="button" style="width: 100%" onclick="showOrder(${id})">Thuê nhà</button>`
    }
    str += `        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3" ></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg"
                                     class="image-info" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://katahome.com/wp-content/uploads/2021/03/Thiet-ke-nha-dep-3-tang-tan-co-dien-mai-nhat-bt-31023-01.jpg"
                                     class="image-info" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://thietkenhadepaau.com/wp-content/uploads/2021/05/biet-thu-2-tang-8-mat-tien.jpg"
                                     class="image-info">
                            </div>
                            <div class="carousel-item">
                                <img src="https://thietkenhadepaau.com/wp-content/uploads/2021/05/biet-thu-2-tang-8-mat-tien.jpg"
                                     class="image-info">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                                data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                                data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    content1.html(str)
    getHouseDetail(id)
}

function getHouseDetail(id) {
    let infoFrame = $("#infoFrame")
    let str = "";
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/house/" + id,
        success: function (data) {
            console.log(data)
            let description = "";
            let status = "Trống";
            if (data.description !== null) {
                description = data.description
            }
            if (data.status === 2) {
                status = "Đã thuê"
            } else if (data.status === 3) {
                status = "Đang nâng cấp"
            }
            str += `<h2 style="margin-top: 2%">${data.name}</h2>
                    <p><i class="fa-solid fa-location-dot"></i> ${data.address}</p>
                    <p>
                        <span style="margin: 0 3% 0 0"><i class="fa-solid fa-bed"></i> ${data.bedroom} phòng ngủ</span>
                        <span><i class="fa-solid fa-bath"></i> ${data.bathroom} nhà tắm</span>
                    </p>
                    <p><b>Chủ sở hữu: </b> ${data.owner.username}</p>
                    <p><b>Số điện thoại liên hệ: </b> ${data.owner.phone}</p>
                    <p><b>Loại phòng: </b> ${data.category.name}</p>
                    <p><b>Mô tả chung: </b> ${description}</p>
                    <h4>Giá: ${data.price} (bạt/đêm)</h4>`
            infoFrame.html(str)
        }
    })
}

function showOrder(id) {
    let content1 = $("#content1")
    let str = `<div class="row mt-4">
                        <div class="col-11 info-frame" style="margin: 0 5% 3% 5%">
                            <div id="infoFrame">
                                
                            </div>
                            <hr>
                            <div>
                                <p><b>Chủ sở hữu: </b> ${name}</p>
                                <table id="tableOrder">
                                    
                                </table>
                            </div>
                            <div class="row mt-4 mb-4">
                                <div class="col-12">
                                    <button class="btn-nav btn-order" type="button" style="width: 100%"
                                            onclick="showOrder()">Thuê nhà
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`
    content1.html(str)
    getHouseDetail1(id)
}

function getHouseDetail1(id) {
    let infoFrame = $("#infoFrame")
    let tableOrder = $("#tableOrder")
    let str = "";
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/house/" + id,
        success: function (data) {
            let description = "";
            let status = "Trống";
            if (data.description !== null) {
                description = data.description
            }
            if (data.status === 2) {
                status = "Đã thuê"
            } else if (data.status === 3) {
                status = "Đang nâng cấp"
            }
            str += `<h2 style="margin-top: 2%">${data.name}</h2>
                                <p><i class="fa-solid fa-location-dot"></i> ${data.address}</p>
                                <p>
                                    <span style="margin: 0 3% 0 0"><i class="fa-solid fa-bed"></i> ${data.bedroom} phòng ngủ</span>
                                    <span><i class="fa-solid fa-bath"></i> ${data.bathroom} nhà tắm</span>
                                </p>
                                <p><b>Chủ sở hữu: </b> ${data.owner.username}</p>
                                <p><b>Số điện thoại liên hệ: </b> ${data.owner.phone}</p>
                                <p><b>Loại phòng: </b> ${data.category.name}</p>
                                <p><b>Mô tả chung: </b> ${description}</p>
                                <h4>Giá: ${data.price} (bạt/đêm)</h4>`
            infoFrame.html(str)
            let str1 = `<tr>
                            <td><b>Chọn ngày bắt đầu thuê: </b></td>
                            <td><input type="date" id="startDate"
                                       style="margin-left: 10%; margin-bottom: 10%" onchange="showBill(${data.price})">
                            </td>
                        </tr>
                        <tr>
                            <td><b>Chọn ngày trả nhà: </b></td>
                            <td><input type="date" id="endDate"
                                       style="margin-left: 10%; margin-bottom: 10%" onchange="showBill(${data.price})">
                            </td>
                        </tr>
                        <tr>
                            <td><b>Số tiền thuê:</b></td>
                            <td><p id="total" style="margin-left: 10%; margin-bottom: 10%"></p></td>
                        </tr>`
            tableOrder.html(str1)
        }
    })
}

function showBill(price) {
    let startDate = new Date(document.getElementById("startDate").value)
    let endDate = new Date(document.getElementById("endDate").value)
    let period = getDifferenceInDays(startDate, endDate)
    let total = price * period
    if (isNaN(total)) {
        total = ""
    }
    $("#total").text(total)
}

function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
}