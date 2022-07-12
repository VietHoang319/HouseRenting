function showOrderHouseDetail(id, ownerId, status) {
    console.log(status)
    let content1 = $("#content1")
    let str = `<div class="row mt-4">
                <div class="col-11 info-frame" style="margin: 0 5% 3% 5%">
                    <div id="infoFrame">
                        
                    </div>
                    <div class="row mt-4 mb-4 def">
                        <div class="col-12">`
    if (status === 1) {
        if (token === "") {
            str += `<button class="btn-nav btn-order" type="button" style="width: 100%" onclick="showLogin()">Thuê nhà</button>`
        } else {
            if (ownerId != localStorage.getItem("id")) {
                str += `<button class="btn-nav btn-order" type="button" style="width: 100%" onclick="showOrder(${id})">Thuê nhà</button>`
            }
        }
    }
    str += `        </div>
                </div>
            </div>
            <div class="row abc">
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" id="carousel">
                        <ol class="carousel-indicators" id="carouselIndicators">
                            
                        </ol>
                        <div class="carousel-inner" id="carouselInner">
                            
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
    findImagesByHouse(id)
    $("#pageable").empty()
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
                                    <button class="btn-nav btn-order" type="button"  style="width: 100%"
                                            onclick="showModalOrder(${id})">Thuê nhà
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

function showModalOrder(id) {
    let strFooter = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                     <button type="button" class="btn btn-primary" onclick="order(${id})">Thuê</button>`
    modalFooter.html(strFooter)
    let strBody = `<p>Bạn có chắc muốn thuê căn nhà này không?</p>`
    modalBody.html(strBody)
    modal.modal("show")
}

function order(id) {
    let order = {
        house: {
            id: id
        },
        customer: {
            id: localStorage.getItem("id")
        },
        startTime: $("#startDate").val(),
        endTime: $("#endDate").val(),
        total: parseInt($("#total").text()),
        status: 1
    }
    console.log(order)
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/orders",
        data: JSON.stringify(order),
        success: function () {
            showModalNoficationCreated()
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function showModalNoficationCreated() {
    let strFooter = `<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="showHome()">Ok</button>`
    modalFooter.html(strFooter)
    let strBody = `<p>Thuê nhà thành công</p>`
    modalBody.html(strBody)
}