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
        }//lay noi dung cua câtegorylist
    })
}
function searchByCategoryId(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories/"+id,
        success: function (data) {
            display(data.content);
        }
    });
}