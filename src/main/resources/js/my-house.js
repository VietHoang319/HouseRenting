let addForm = document.getElementById('addForm');
let categorySelect = document.getElementById('categoryId');
let role;

function showMyHouse() {
    let content0 = $("#content0")
let str = `     <div class="row">
                    <button class="mt-4 btn-nav" style="border: 2px solid black">Thêm nhà</button>
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
    $('#exampleModal').modal('show');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            let str = "";
            for (let i=0; i<data.length; i++) {
                console.log(data)
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