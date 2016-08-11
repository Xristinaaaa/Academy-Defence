function HubElement (setX, setY, setWidth, setHeight, setImageIndex) {
    this.X = setX;
    this.Y = setY;
    this.Width = setWidth;
    this.Height = setHeight;
    this.ImageIndex = setImageIndex;

    return this;
}

function HubText (setX, setY, setFontSize, setColor, setContent) {
    this.X = setX;
    this.Y = setY;
    this.FontSize = setFontSize;
    this.Color = setColor;
    this.ContentObj = {};


    return this;
}

function HubButton (setX, setY, setWidth, setHeight, setImageIndex,setSpawnType) {
  this.X = setX;
  this.Y = setY;
  this.Width = setWidth;
  this.Height = setHeight;
  this.ImageIndex = setImageIndex;
  this.SpawnType = setSpawnType;

  this.TryClick = function(clientX,clientY,block){
     if (clientX > this.X - (this.Width/2) && clientX < this.X + (this.Width/2) &&
      clientY > this.Y - (this.Height/2) && clientY < this.Y + (this.Height/2))
      {
        if (block.Tower === undefined)
        {
          if (this.SpawnType === 0 && playerStats.initGold >= 70)
          {
            block.Tower = new Tower(this.SpawnType,
                            new Vector2(Resolution.X*blockSize*(block.X + 0.5),
                            Resolution.X*blockSize*(block.Y + 0.5)),
                            30, 50,4, 70);
            playerStats.initGold -= 70;
          }
          else if (this.SpawnType === 1 && playerStats.initGold >= 120)
          {
            block.Tower = new Tower(this.SpawnType,
                            new Vector2(Resolution.X*blockSize*(block.X + 0.5),
                            Resolution.X*blockSize*(block.Y + 0.5)),
                            10, 25, 3, 120);
            playerStats.initGold -= 120;
          }
          else if (this.SpawnType === 2 && playerStats.initGold >= 150) {
            block.Tower = new Tower(this.SpawnType,
                            new Vector2(Resolution.X*blockSize*(block.X + 0.5),
                            Resolution.X*blockSize*(block.Y + 0.5)),
                            80, 150, 5, 150);
            playerStats.initGold -= 150;
          }

          block.Highlighted = false;
          currentBlock = undefined;
        }
      }
  }
}
