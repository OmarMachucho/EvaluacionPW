function fileValidation(){
    console.log("mande");
    var fileInput = document.getElementById('archivo_csv');
    var filePath = fileInput.value;
    var allowedExtensions = /(.csv)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Solo se aceptan archivos de extensión .csv');
        fileInput.value = '';
        return false;
    }
}