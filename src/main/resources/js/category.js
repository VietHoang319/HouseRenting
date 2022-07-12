function findAllCategory() {
    let categoryList = document.getElementById("listCategory");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            let str = ""
            for (let i = 0; i < data.length; i++) {
                str += `<span class="list-group-item" onclick="searchByCategoryId(${data[i].id})">${data[i].name}</span> `
            }
            categoryList.innerHTML = str;
        }//lay noi dung cua câtegorylist
    })
}

function searchByCategoryId(category_id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/home/find-by-category?category_id=" + category_id,
        success: function (data) {
            let content1 = $("#content1")
            let str = `<div class="row" id="list">

                    </div>`
            content1.html(str)
            display(data.content, true);
            pageable(data)
        }
    });
}