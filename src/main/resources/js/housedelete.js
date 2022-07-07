
function deleteHouse(id){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(storageKey)
        },
        type: "DELETE",
        url: "http://localhost:8080/houses/" + id,
        success: function () {
            alert("xoa duoc roi dit me")
            main()
        },
        error: function (error) {
            alert("deo xoa duoc roi")
            console.log(error)
        }
    })
}