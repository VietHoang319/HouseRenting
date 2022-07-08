let categoryList = document.getElementById("listCategory");

function findAllCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            let str = ""
            for (let i = 0; i < data.length; i++) {
                str += ` <li><a href="#" onclick="searchByCategoryId(${data[i].id})">${data[i].name}</a></li> 
   
`
            }
            categoryList.innerHTML = str;
            console.log(data)
        }
    })
}
findAllCategory();
function searchByCategoryId(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories/"+id,
        success: function (data) {
            dislpay(data.content);
        }
    });
}