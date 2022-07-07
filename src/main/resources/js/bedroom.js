function findAllBedroom() {
    let bedroomList = document.getElementById("listBedroom");
    let str = ""
    for(let i = 1; i <= 5; i++) {
        str += `<span class="list-group-item">${i} phòng ngủ</span>`
    }
    bedroomList.innerHTML = str
}