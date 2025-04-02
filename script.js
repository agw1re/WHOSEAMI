let canvas = new fabric.Canvas('canvas');

document.getElementById('upload').addEventListener('change', function(event) {
    let reader = new FileReader();
    reader.onload = function(e) {
        fabric.Image.fromURL(e.target.result, function(img) {
            canvas.clear();
            img.scaleToWidth(500);
            canvas.setWidth(img.width);
            canvas.setHeight(img.height);
            canvas.add(img);
            canvas.renderAll();
        });
    };
    reader.readAsDataURL(event.target.files[0]);
});

function addSticker(img) {
    fabric.Image.fromURL(img.src, function(sticker) {
        sticker.scale(0.3);
        sticker.set({ left: 100, top: 100 });
        canvas.add(sticker);
    });
}

function downloadImage() {
    let link = document.createElement('a');
    link.download = 'photo-sticker.png';
    link.href = canvas.toDataURL();
    link.click();
}
