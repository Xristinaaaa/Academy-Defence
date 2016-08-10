function Tower(setType,setPos,setAttackSpeed){
  this.Type = setType;
  this.Position = setPos;
  this.AttackSpeed = setAttackSpeed;
  this.Range = Resolution.X*blockSize*3;
  this.Clock = 0;


  this.ShootAtBug = function(){
     if (this.Clock % this.AttackSpeed === 0 || this.Clock % this.AttackSpeed === -0)
     {
       this.Clock = 0;
       for (var i = 0;i < bugs.length;i+=1)
       {
         //console.log(this.Position);
         if (distance2D(this.Position,new Vector2(bugs[i].X,bugs[i].Y)) < this.Range)
         {
           bullets.push(new Bullet(bugs[i],this.Position,3,10,0));
           return;
         }
       }
     }

     this.Clock+=1;
  }

  return this;
}

function Bullet(bug,setPos,setSpeed,setDmg,setType){
  this.Position = setPos;
  this.TrackedBug = bug;
  this.Speed = setSpeed;
  this.Damage = setDmg;
  this.Type = setType;
  this.Clock = 0;

  this.TraceBug = function(){
    //Todo: When bug dies and becomes undefined , remove this bullet//
     if (this.Clock % this.Speed === 0 || this.Clock % this.Speed === -0){
      var moveVector = getDirection(this.Position,new Vector2(this.TrackedBug.X,this.TrackedBug.Y));
      this.Position.X += moveVector.X * ( (Resolution.X*blockSize) / this.Speed );
      this.Position.Y += moveVector.Y * ( (Resolution.X*blockSize) / this.Speed );
     }
     this.Clock += 1;
  }
  //console.log(this);
  return this;
}
