$('.button').click(function() { 
    var img = new Image;
img.onload = function() {
        var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    
    var base64Image = getBase64Image(canvas);
    downloadURI(base64Image, 'screenshot.png');
};
img.setAttribute('crossOrigin', 'anonymous');
img.src = document.getElementById('resultImage').src;
});

function getBase64Image(canvas) {
var dataURL = canvas.toDataURL("image/png");
return dataURL;
}

function downloadURI(uri, name) {
// IE10+ : (has Blob, but not a[download] or URL)
if (navigator.msSaveBlob) {
  const blob = dataURItoBlob(uri);
  return navigator.msSaveBlob(blob, name);
}
const link = document.createElement('a');
link.download = name;
link.href = uri;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

function dataURItoBlob(dataurl) {
const parts = dataurl.split(','), mime = parts[0].match(/:(.*?);/)[1];
if (parts[0].indexOf('base64') !== -1) {
    const bstr = atob(parts[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], {type:mime})
} else {
    const raw = decodeURIComponent(parts[1])
    return new Blob([raw], {type: mime})
}
}