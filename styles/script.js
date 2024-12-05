const form = document.querySelector("form");
const fileInput = document.querySelector(".file-input");
const progressBox = document.querySelector(".progress");
const UploadedBox = document.querySelector(".uploaded");

form.addEventListener('click', () => {
    fileInput.click();
});

fileInput.onchange = ({ }) => {
    let file = target.files[0];
    if (file) {
        let fileName = file.name;
    }
    uploadedFile();
}

function uploadedFile() {

}