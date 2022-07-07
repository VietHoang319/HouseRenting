function findAllBathroom() {
    let bathroomList = document.getElementById("listBathroom");
    let str = ""
    for(let i = 1; i <= 3; i++) {
        str += `<span class="list-group-item">${i} nhà tắm</span>`
    }
    bathroomList.innerHTML = str
}