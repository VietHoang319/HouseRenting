let addForm = document.getElementById('addForm');
let role;

function showMyHouse() {
    let content0 = $("#content0")
    let str = `     <div class="row">
                    <button class="mt-4 btn-nav" style="border: 2px solid black" onclick="showAddForm()">Thêm nhà</button>
                </div>
                <div class="col-12">
                    <div id="content1">
                        <div class="row" id="list">
                        
                        </div>
                    </div>
                </div>`
    content0.html(str)
    findAllMyHouse()
}

function showAddForm() {
    modal.modal('show');
    let strBody = `<div id="addForm">
                     <label style="color: black"> Tên: </label>
                    <input type="text" name="name" class="form-control" id="nameA">
                    <label style="color: black"> Địa chỉ: </label>
                    <input type="text" name="address" class="form-control" id="addressA">
                    <label style="color: black"> Số phòng ngủ: </label>
                    <input type="number" name="bedroom" class="form-control" id="bedroomA">
                    <label style="color: black"> Số phòng tắm: </label>
                    <input type="number" name="bathroom" class="form-control" id="bathroomA">
                    <label style="color: black"> Giá sếp Hoàng mong muốn: </label>
                    <input type="number" name="price" class="form-control" id="priceA">
                    <label style="color: black"> Mô tả: </label>
                    <input type="text" name="description" class="form-control" id="descriptionA">
                    <label style="color: black"> Loại phòng: </label>
                    <select id="categoryId" name="categoryId" class="form-control">

                    </select>
                </div>`
    modalBody.html(strBody)
    let categorySelect = document.getElementById('categoryId');
    let strFooter = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="save()" >Lưu</button>`
    modalFooter.html(strFooter)
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            console.log(data)
            let str = "";
            for (let i=0; i<data.length; i++) {
                str += `<option value="${data[i].id}"> ${data[i].name}</option>`
            }
            categorySelect.innerHTML = str;
        }
    });
}

function save() {

    let name = $("#nameA");
    let address = $("#addressA");
    let bedroom = $("#bedroomA");
    let bathroom = $("#bathroomA");
    let price = $("#priceA");
    let description = $("#descriptionA");
    let category = $("#categoryId");

    let house = {
        name: name.val(),
        address : address.val(),
        bedroom: bathroom.val(),
        bathroom: bathroom.val(),
        price: price.val(),
        description: description.val(),
        status: 1,
        category : {
            id : category.val()
        },
        owner: {
            id: localStorage.getItem("id")
        }
        // name: name,
        // address: address,
        // bedroom : bedroom,
        // bathroom:bathroom,
        // price : price,
        // description: description,
        // status: 1,
        // category : {
        //     id : category
        // },
        // owner: {
        //     id: localStorage.getItem("id")
        // }
    }
    console.log(house);

    $.ajax({
        headers: {
            Authorization: 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/houses",
        data: JSON.stringify(house),
        success: function () {
            name.val("")
            address.val("")
            bedroom.val("")
            bathroom.val("")
            price.val("")
            description.val("")
            category : {
                id : category.val("")
            }

            showMyHouse()
        },
        error: function (error) {
            console.log(error)
        }
    })

}

function findAllMyHouse() {
    $.ajax({
        type: "GET",
        headers: {
            Authorization: 'Bearer ' + token,
        },
        url: "http://localhost:8080/houses/find-by-ownerId?owner_id="+ localStorage.getItem("id"),
        success: function (data) {
            console.log(data);
            display(data, false);
        }
    });
}

function showEditForm(id){
    let categorySelect = document.getElementById('categoryIdEdit');
    $.ajax({
        type: "GET",
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/home/house/"+id,
        success: function (data) {
            console.log(data)
            document.getElementById('id').value = data.id;
            document.getElementById('nameEdit').value = data.name;
            document.getElementById('addressEdit').value = data.address;
            document.getElementById('bedroomEdit').value = data.bedroom;
            document.getElementById('bathroomEdit').value = data.bathroom;
            document.getElementById('priceEdit').value = data.price;
            document.getElementById('descriptionEdit').value = data.description;

        }
    });
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            console.log(data)
            let str = "";
            for (let i=0; i<data.length; i++) {
                str += `<option value="${data[i].id}"> ${data[i].name}</option>`
            }
            categorySelect.innerHTML = str;
        }
    });
}

function update() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('nameEdit').value;
    let address = document.getElementById('addressEdit').value;
    let bedroom = document.getElementById('bedroomEdit').value;
    let bathroom = document.getElementById('bathroomEdit').value;
    let price = document.getElementById('priceEdit').value;
    let description = document.getElementById('descriptionEdit').value;
    let categoryId = document.getElementById('categoryIdEdit').value;

    let house = {
        name: name,
        address:address,
        bedroom:bedroom,
        bathroom:bathroom,
        price:price,
        description:description,
        status: 1,
        category : {
            id : categoryId
        },
        owner: {
            id: localStorage.getItem("id")
        }
    }
    console.log(house);



    $.ajax({
        type: "PUT",
        headers: {
            Authorization: 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/houses/" + id,
        data: JSON.stringify(house),
        success: function () {
            // name.val("")
            // address.val("")
            // bedroom.val("")
            // bathroom.val("")
            // price.val("")
            // description.val("")
            // category : {
            //     id : category.val("")
            // }

            showMyHouse()
        },
        error: function (error) {
            console.log(error)
        }
    })




}