function Vector2(setX, setY) {
    this.X = setX;
    this.Y = setY;

    return this;
}

function distance2D(point1, point2) {
    return Math.sqrt(((point1.X - point2.X) * (point1.X - point2.X)) + ((point1.Y - point2.Y) * (point1.Y - point2.Y)));
}

// returns the normal vector representing the direction from "pointFrom" to "pointTo" 
function getDirection(pointFrom, pointTo) {
    var resultDirection = new Vector2();

    resultDirection.X = pointTo.X - pointFrom.X;
    resultDirection.Y = pointTo.Y - pointFrom.Y;

    resultDirection.X = resultDirection.X / distance2D(pointTo, pointFrom);
    resultDirection.Y = resultDirection.Y / distance2D(pointTo, pointFrom);

    return resultDirection;
}
