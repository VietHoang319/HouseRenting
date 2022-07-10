function showHouseDetail(id) {
    let content0 = $("#content0")
    let str = `<div class="row">
            <div class="col-12">
                <div id="content1">
                    <div class="row">
                        <button class="btn-nav" onclick="showMyHouse()"><i class="fa-solid fa-angles-left"></i><span> Quay lại</span></button>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 info-frame">
                            <div id="infoFrame">
                        
                            </div>
                            <div class="row mt-4 mb-4">
                                <div class="input-file-container btn-crud btn-nav">
<!--                                    <label tabindex="0" for="my-file" class="input-file-trigger ">Thêm ảnh</label>-->
                                    <span  class="input-file-trigger">Thêm ảnh</span>
                                    <input class="input-file" id="fileButton" type="file"  value="upload" accept=".jpg"  onchange="upload(event, ${id})">
                                </div>
                                <button class="btn-nav btn-crud" data-toggle="modal" data-target="#exampleModal" onclick="showEditForm(${id})">Sửa thông tin</button>                            
                                <button class="btn-nav btn-crud">Xóa nhà đã đăng</button>
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
                    </div>
                </div>
            </div>
        </div>`
    content0.html(str)
    getHouse(id)
}

function getHouse(id) {
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
            }
            else if (data.status === 3) {
                status = "Đang nâng cấp"
            }
            str += `<h2 style="margin-top: 2%">${data.name}</h2>
                    <p><i class="fa-solid fa-location-dot"></i> ${data.address}</p>
                    <p>
                        <span style="margin: 0 3% 0 0"><i class="fa-solid fa-bed"></i> ${data.bedroom} phòng ngủ</span>
                        <span><i class="fa-solid fa-bath"></i> ${data.bathroom} nhà tắm</span>
                    </p>
                    <p><b>Loại phòng: </b> ${data.category.name}</p>
                    <p><b>Mô tả chung: </b> ${description}</p>
                    <p><b>Trạng thái: </b> ${status}</p>
                    <h4>Giá: ${data.price} (bạt/đêm)</h4>`
            infoFrame.html(str)
        }
    })
}