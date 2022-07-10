var image = '';
// firebase bucket name
// REPLACE WITH THE ONE YOU CREATE
// ALSO CHECK STORAGE RULES IN FIREBASE CONSOLE
var fbBucketName = 'images';
// get elements
var fileButton = document.getElementById('fileButton');
let storageKeyImg = 'img';
localStorage.setItem("img", "")
// listen for file selection
function upload(e, id) {

    // what happened
    console.log('file upload event', e);

    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    var uploadTask = storageRef.put(file);

    // The part below is largely copy-pasted from the 'Full Example' section from
    // https://firebase.google.com/docs/storage/web/upload-files

    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
        console.log(snapshot)
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            // save this link somewhere, e.g. put it in an input field
            let downloadURL = uploadTask.snapshot.downloadURL;
            localStorage.setItem(storageKeyImg , downloadURL)
            let imageUpLoad = {
                image: localStorage.getItem(storageKeyImg),
                house: {
                    id: id
                }
            }
            // alert(downloadURL)
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: 'Post',
                url: "http://localhost:8080/images",
                data: JSON.stringify(imageUpLoad),
                success: function () {
                    localStorage.setItem(storageKeyImg, "")
                    showHouseDetail(id)
                }
            })
            // let divLocation = document.getElementById("imgDiv");
            // let imgElement = document.createElement("img");
            // imgElement.src = downloadURL
            // console.log('pic ==', image)
            // divLocation.append(imgElement);
        });
}

function upload1(e) {

    // what happened
    // console.log('file upload event', e);

    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    var uploadTask = storageRef.put(file);

    // The part below is largely copy-pasted from the 'Full Example' section from
    // https://firebase.google.com/docs/storage/web/upload-files

    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // console.log(snapshot)
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    // console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    // console.log('Upload is running');
                    break;
            }
        }, function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            // save this link somewhere, e.g. put it in an input field
            let downloadURL = uploadTask.snapshot.downloadURL;
            localStorage.setItem(storageKeyImg , downloadURL)
            // let divLocation = document.getElementById("imgDiv");
            // let imgElement = document.createElement("img");
            // imgElement.src = downloadURL
            // console.log('pic ==', image)
            // divLocation.append(imgElement);
        });
}