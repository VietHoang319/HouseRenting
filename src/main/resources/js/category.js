function findAllCategory() {
    let categoryList = document.getElementById("listCategory");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            console.log(data)
            let str = ""
            for (let i = 0; i < data.length; i++) {
                str += `<span class="list-group-item">${data[i].name}</span>`
            }
            categoryList.innerHTML = str;
        }
    })
}