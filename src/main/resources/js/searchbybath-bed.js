
function searchByBedroomBathroom() {
    let bedroom= document.getElementById("bedroom").value;
    let bathroom=document.getElementById("bathroom").value;
    $.ajax({
        headers: {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
        },
        type: 'GET',
        url: "http://localhost:8080/houses/find-by-bathroom-and-bedroom"+"?bathroom="+bathroom+"&bedroomm=" + bedroom,
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