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
                                <button class="btn-nav btn-crud">Thêm ảnh</button>
                                <button class="btn-nav btn-crud">Sửa thông tin</button>
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