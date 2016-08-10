//Display buildMenu at given X, Y coords.
function displayBuildMenu(canvas, imgArr, block, clickPointerX, clickPointerY) {
    var startPosX = clickPointerX;
    var startPosY = clickPointerY;
    var context2D = canvas.getContext('2d');
    var distanceBetweenRectangles = 100;

    context2D.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < imgArr.length; i += 1) {
        context2D.drawImage(imgArr[i], startPosX + (i * distanceBetweenRectangles), startPosY);
    }
}

//Return selected tower type.
function getSelectedTower(selector) {

}