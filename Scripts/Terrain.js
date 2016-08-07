function Block(setY,setX,setType)
{
  this.Y = setY;
  this.X = setX;
  this.Type = setType;
  this.Direction = new Vector2(0, 0);
  this.Tower = undefined;

  return this;
}
