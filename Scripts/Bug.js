function Bug(position,size, health, speed, clock) {
    this.X = position.X;
    this.Y = position.Y;
    this.Width = size.X;
    this.Height = size.Y;
    this.Health = health;
    this.Speed = speed;
    this.Clock = clock;
    this.Direction = new Vector2(1, 0);

    this.changeDirection = function(newDirection) {
        this.Direction.X = newDirection.X;
        this.Direction.Y = newDirection.Y;
    }

    this.Update = function() {
          if (this.Clock >= 0)
          {
            if (this.Clock % 50 === 0 || this.Clock % 50 === -0)
            {
              bugNextDirection(this);
            }
            this.X += this.Direction.X * (Resolution.X * blockSize * 0.02);
            this.Y += this.Direction.Y * (Resolution.Y * blockSize * 0.02);
          }

          this.Clock+=1;


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
