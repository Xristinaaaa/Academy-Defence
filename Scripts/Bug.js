function Bug(position, health, speed, clock) {
    this.X = position.X;
    this.Y = position.Y;
    this.Health = health;
    this.Speed = speed;
    this.Clock = clock;
    this.Direction = new Vector2(1, 0);

    this.changeDirection = function(newDirection) {
        this.Direction.X = newDirection.X;
        this.Direction.Y = newDirection.Y;
    }

    this.Update = function() {
        bugNextDirection(this);

        this.X += this.Direction.X * (Resolution.X / 10);
        this.Y += this.Direction.Y * (Resolution.Y / 10);
    }
    
    return this;
}

function bugNextDirection(bug) {
  if ((bug.X >= 0 && bug.X < Resolution.X) && (bug.Y >= 0 && bug.Y < Resolution.Y)) {
    var newDirection = new Vector2(0, 0);
    var tempX = 0;
    var tempY = 0;
    var tempBugX = bug.X;
    var tempBugY = bug.Y;

    while(tempBugX >= Resolution.X / 10) {
      tempBugX -= Resolution.X / 10;
      tempX += 1;
    }

    while(tempBugY >= Resolution.Y / 10) {
      tempBugY -= Resolution.Y / 10;
      tempY += 1;
    }
    
    bug.Direction = grida[tempY][tempX].Direction;
  }
}