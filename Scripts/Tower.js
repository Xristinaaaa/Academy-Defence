function Tower(setType,setPos,setAttackSpeed, setDamage, setRange){
  this.Type = setType;
  this.Position = setPos;
  this.AttackSpeed = setAttackSpeed;
  this.Damage = setDamage;
  this.Range = Resolution.X*blockSize*setRange;
  this.Clock = 0;


  this.ShootAtBug = function(){
     if (this.Clock % this.AttackSpeed === 0 || this.Clock % this.AttackSpeed === -0)
     {
       this.Clock = 0;
       for (var i = 0;i < bugs.length;i+=1)
       {
         if (distance2D(this.Position,new Vector2(bugs[i].X,bugs[i].Y)) < this.Range)
         {
           bullets.push(new Bullet(bugs[i], new Vector2(this.Position.X, this.Position.Y),2,this.Damage,0));
           break;
         }
       }
     }

     this.Clock+=1;
  };

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
      var prevPosition = new Vector2(this.Position.X, this.Position.Y);
      var moveVector = getDirection(this.Position,new Vector2(this.TrackedBug.X,this.TrackedBug.Y));
      this.Position.X += moveVector.X * ( (Resolution.X*blockSize) / this.Speed );
      this.Position.Y += moveVector.Y * ( (Resolution.X*blockSize) / this.Speed );
      if ( distance2D(prevPosition, new Vector2(this.TrackedBug.X,this.TrackedBug.Y)) < 
            distance2D(this.Position, new Vector2(this.TrackedBug.X,this.TrackedBug.Y))) {
              bullets.splice(bullets.indexOf(this), 1);
              this.TrackedBug.takeDamage(this.Damage);
      }
     }
     this.Clock += 1;
  };
  
  return this;
}
