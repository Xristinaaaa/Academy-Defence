function Block(setY, setX, setType) {
    this.Y = setY;
    this.X = setX;
    this.Type = setType;
    this.Direction = new Vector2(0, 0);
    this.Tower = undefined;
    this.Highlighted = false;

    return this;
}

function getBlockFromCoordinates(x, y) {
    if ((x > Resolution.X || x < 0) &&
        (y > Resolution.Y || y < 0)) {
        throw new Error("Clicked outside of canvas!");
    }

    var tempX = 0;
    var tempY = 0;
    var tempBlockX = x;
    var tempBlockY = y;

    while (tempBlockX >= Resolution.X / 10) {
        tempBlockX -= Resolution.X / 10;
        tempX += 1;
    }

    while (tempBlockY >= Resolution.Y / 10) {
        tempBlockY -= Resolution.Y / 10;
        tempY += 1;
    }

    return grida[tempY][tempX];
}