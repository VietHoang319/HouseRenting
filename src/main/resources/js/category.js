function findAllCategory() {
    let categoryList = document.getElementById("listCategory");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            let str = ""
            for (let i = 0; i < data.length; i++) {
                str += `<span class="list-group-item" onclick="searchByCategoryId(${data[i].id})">${data[i].name}</span>`
            }
            categoryList.innerHTML = str;
        }
    })
}
function searchByCategoryId(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories/"+id,
        success: function (data) {
            let content1 = $("#content1")
            let str = `<div class="row" id="list">

                    </div>`
            content1.html(str)
            display(data.content);
        }
    });
}