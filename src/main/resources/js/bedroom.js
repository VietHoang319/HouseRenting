function findAllBedroom() {
    let bedroomList = document.getElementById("listBedroom");
    let str = "";
    for (let i = 1; i <= 5; i++) {
        str += `<span class="list-group-item" onclick="searchByBedroom(${i})">${i} Phòng ngủ</span>`
    }
    bedroomList.innerHTML = str
}

function searchByBedroom(bedroom) {
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/find-by-bedroom?bedroom=" + bedroom,
        success: function (data) {
            console.log(data.content)
            let content1 = $("#content1")
            let str = `<div class="row" id="list">

                    </div>`
            content1.html(str)
            display(data.content, true)
            pageable(data)
        }
    })
}