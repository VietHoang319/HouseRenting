
function searchByAll(house) {
    let address= document.getElementById("address").value;
    let startPrice= document.getElementById("startPrice").value;
    let endPrice= document.getElementById("endPrice").value;
    let bathroom= document.getElementById("bathroom").value;
    let bedroom= document.getElementById("bedroom").value;
    let dateBegin= document.getElementById("dateBegin").value;
    let dateEnd= document.getElementById("dateEnd").value;


    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/home/search-by-all?address=" +address +"&start="+startPrice+"&end=&"+endPrice+"bathroom=&"+bathroom+"&DateBegin"+dateBegin +"&end=" + bedroom,
        success: function (data) {
            console.log(data.content)
            display(data.content, true)
        }
    })
}