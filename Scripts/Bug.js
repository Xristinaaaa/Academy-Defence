function Bug(position, size, health, speed, iterator) {
    this.X = position.X;
    this.Y = position.Y;
    this.Width = size.X;
    this.Height = size.Y;
    this.Health = health;
    this.Speed = speed;
    this.Clock = iterator * -speed;
    this.Direction = new Vector2(1, 0);

    this.changeDirection = function (newDirection) {
        this.Direction.X = newDirection.X;
        this.Direction.Y = newDirection.Y;
    };

    this.Update = function () {
        if (this.Clock >= 0) {
            if (this.Clock % this.Speed === 0 || this.Clock % this.Speed === -0) {
                bugNextDirection(this);
            }
            this.X += this.Direction.X * (Resolution.X * blockSize * (1 / this.Speed));
            this.Y += this.Direction.Y * (Resolution.Y * blockSize * (1 / this.Speed));
        }

        this.Clock += 1;
    };

    this.takeDamage = function (damage) {
        this.Health -= damage;
        if (this.Health <= 0) {
            bugs.splice(bugs.indexOf(this), 1);
            playerStats.initGold += 5;

            //Animate gold Image

            hubItems[0] = (new HubElement(Resolution.X + (blockSize * Resolution.X * 4),
                (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.7), (blockSize * Resolution.X * 0.7), 0));

            Draw();

            setTimeout(function () {
                hubItems[0] = (new HubElement(Resolution.X + (blockSize * Resolution.X * 4),
                    (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 0));

                Draw();

            }, 100)

        }
    };
    return this;
}

function bugNextDirection(bug) {
    if ((bug.X >= 0 && bug.X < Resolution.X) && (bug.Y >= 0 && bug.Y < Resolution.Y)) {
        var newDirection = new Vector2(0, 0);
        var tempX = 0;
        var tempY = 0;
        var tempBugX = bug.X;
        var tempBugY = bug.Y;

        while (tempBugX >= Resolution.X / 10) {
            tempBugX -= Resolution.X / 10;
            tempX += 1;
        }

        while (tempBugY >= Resolution.Y / 10) {
            tempBugY -= Resolution.Y / 10;
            tempY += 1;
        }

        if (grida[tempY][tempX].IsAcademy === true) {
            bugs.splice(bugs.indexOf(bug), 1);
            playerStats.initLife -= 1;

            //Animate heart Image
            hubItems[1] = (new HubElement(Resolution.X + (blockSize * Resolution.X * 2),
                (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.4), (blockSize * Resolution.X * 0.4), 1));

            Draw();

            var drawBack = setTimeout(function () {
                    hubItems[1] = (new HubElement(Resolution.X + (blockSize * Resolution.X * 2),
                        (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 1));

                    Draw();
                }, 100)

            if (playerStats.initLife <= 0) {
                clearInterval(DrawInterval);
                clearInterval(UpdateInterval);
                clearTimeout(drawBack);

                DrawLose();
            }
        }

        bug.Direction = grida[tempY][tempX].Direction;
    }
}
