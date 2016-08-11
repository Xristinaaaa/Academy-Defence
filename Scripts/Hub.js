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
    this.Content = setContent;


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
          if (this.SpawnType === 0)
          {
            block.Tower = new Tower(this.SpawnType,new Vector2(Resolution.X*blockSize*(block.X + 0.5),Resolution.X*blockSize*(block.Y + 0.5)),30, 50,4);

          }
          else if (this.SpawnType === 1)
          {
            block.Tower = new Tower(this.SpawnType,new Vector2(Resolution.X*blockSize*(block.X + 0.5),Resolution.X*blockSize*(block.Y + 0.5)),10, 25,3);

          }
          else {
            block.Tower = new Tower(this.SpawnType,new Vector2(Resolution.X*blockSize*(block.X + 0.5),Resolution.X*blockSize*(block.Y + 0.5)),100, 150,5);
          }
          block.Highlighted = false;
          currentBlock = undefined;
        }
      }
  }
}
