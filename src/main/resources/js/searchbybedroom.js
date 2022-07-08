function searchByBedroom() {
    let bedroom= document.getElementById("bedroom").value;
    $.ajax({
        headers: {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
        },
        type: 'GET',
        url: "http://localhost:8080/houses/find-by-bedroom=" + bedroom,
        success: function (data) {
            let str = ""
            for (let i = 0; i < data.length; i++) {
                str += `<li><a href="#">${data[i].name}</a></li> `
            }
            categoryList.innerHTML = str;
            console.log(data)
        }
    })
}