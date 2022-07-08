function findAllBathroom() {
    let bathroomList = document.getElementById("listBathroom");
    let str = ""
    for(let i = 1; i <= 3; i++) {
        str += `<span class="list-group-item" onclick="searchByBathRoom(${i})">${i} nhà tắm</span>`
    }
    bathroomList.innerHTML = str
}
function searchByBathRoom(bathroom) {
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/find-by-bathroom?bathroom=" + bathroom,
        success: function (data) {
            console.log(data.content)
            display(data.content, true)
        }
    })
}