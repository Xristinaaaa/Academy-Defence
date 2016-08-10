function Update() {
    //moving bugs

    for (var i = 0; i < bugs.length; i += 1) {
        var currentBug = bugs[i];

        //TODO Change Direction When inside grid direction is new
        currentBug.Update();

    }

    //Calling all grid activities//
    for (var y = 0;y < 10;y+=1)
    {
      for (var x = 0;x < 10;x+=1)
      {
        if (grida[y][x].Tower !== undefined)
        {
          grida[y][x].Tower.ShootAtBug();
        }
      }
    }
    //Bullets trace their targets//
    for (var i = 0;i < bullets.length;i+=1)
    {
      bullets[i].TraceBug();
    }
}
