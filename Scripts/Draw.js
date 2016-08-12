function Draw()
{
    ctx.fillStyle = "#00CD78";
    ctx.fillRect(0,0,canvasa.width,canvasa.height);

    //ctx.drawImage(trevataImage,0,0,50,50);
    for (var y = 0;y < 10;y+=1)
    {
      for (var x = 0;x < 10;x+=1)
      {
         ctx.drawImage(allImages[grida[y][x].Type],
         x * (blockSize * Resolution.X),
         y * (blockSize * Resolution.Y),
         (blockSize * Resolution.X),
         (blockSize * Resolution.Y));

         if (grida[y][x].Tower !== undefined)
         {
           ctx.drawImage(towerBaseImages[grida[y][x].Tower.Type],x * (blockSize * Resolution.X),
           y * (blockSize * Resolution.Y),
           (blockSize * Resolution.X),
           (blockSize * Resolution.Y));
         }
      }
    }

    //ctx.drawImage(academyImage,0.73*window.innerHeight,0.565*window.innerHeight,0.22*window.innerHeight,0.41*window.innerHeight);


    //Drawing Hub Items
    for (var i = 0; i < hubItems.length; i += 1) {
      ctx.drawImage(hubImages[hubItems[i].ImageIndex], hubItems[i].X - (hubItems[i].Width / 2), hubItems[i].Y- (hubItems[i].Height / 2), hubItems[i].Width, hubItems[i].Height);
    }

    //Drawing buttons//
    for (var i = 0;i < towersMenu.length;i+=1){
      ctx.drawImage(towerMenuImages[towersMenu[i].ImageIndex], towersMenu[i].X - (towersMenu[i].Width / 2), towersMenu[i].Y- (towersMenu[i].Height / 2), towersMenu[i].Width, towersMenu[i].Height);
    }
    // THIS IS BASED ON MY RESOLUTION
    //drawing towers Stats
    ctx.fillStyle = "#FFFFFF";
    ctx.font = 18 + "px Comic Sans MS";
    //DMG
    ctx.fillText("DMG: 50",
              Resolution.X + (blockSize * Resolution.X * 0.4),
              (blockSize * Resolution.X * 6));
    ctx.fillText("DMG: 25",
              Resolution.X + (blockSize * Resolution.X * 2.4),
              (blockSize * Resolution.X * 6));
    ctx.fillText("DMG: 150",
              Resolution.X + (blockSize * Resolution.X * 4.3),
              (blockSize * Resolution.X * 6));
    //Attack speed
    ctx.fillText("AS: 30",
              Resolution.X + (blockSize * Resolution.X * 0.4),
              (blockSize * Resolution.X * 6.5));
    ctx.fillText("AS: 10",
              Resolution.X + (blockSize * Resolution.X * 2.4),
              (blockSize * Resolution.X * 6.5));
    ctx.fillText("AS: 80",
              Resolution.X + (blockSize * Resolution.X * 4.3),
              (blockSize * Resolution.X * 6.5));
    //Tower range
    ctx.fillText("Range: 4",
              Resolution.X + (blockSize * Resolution.X * 0.4),
              (blockSize * Resolution.X * 7));
    ctx.fillText("Range: 3",
              Resolution.X + (blockSize * Resolution.X * 2.4),
              (blockSize * Resolution.X * 7));
    ctx.fillText("Range: 5",
              Resolution.X + (blockSize * Resolution.X * 4.3),
              (blockSize * Resolution.X * 7));
    //Tower price
    ctx.fillStyle = "#F1F222";
    ctx.fillText("Price: 70",
              Resolution.X + (blockSize * Resolution.X * 0.4),
              (blockSize * Resolution.X * 9.3));
    ctx.fillText("Price: 120",
              Resolution.X + (blockSize * Resolution.X * 2.4),
              (blockSize * Resolution.X * 9.3));
    ctx.fillText("Price: 150",
              Resolution.X + (blockSize * Resolution.X * 4.3),
              (blockSize * Resolution.X * 9.3));



    //Drawing Player Stats
    ctx.font = 26 + "px Comic Sans MS";
    ctx.fillText(playerStats.initLife + "/10",
                Resolution.X + (blockSize * Resolution.X * 1.6),
                (blockSize * Resolution.X * 2));

    ctx.fillText(playerStats.initGold,
                Resolution.X + (blockSize * Resolution.X * 3.7),
                (blockSize * Resolution.X * 2));


    ctx.fillStyle = "#FFFFFF";
    ctx.font = 38 + "px Comic Sans MS";
    ctx.fillText("Wave : " + playerStats.waveNumber,
                Resolution.X + (blockSize * Resolution.X * 1.7),
                (blockSize * Resolution.X * 3.5));

    //draw based on grid
    for (var y = 0; y < 10; y += 1) {
      for (var x = 0; x < 10; x += 1) {
        //hightlight effect
        if (grida[y][x].Highlighted) {
          ctx.drawImage(hightlight,
                        x * (blockSize * Resolution.X),
                        y * (blockSize * Resolution.Y),
                        (blockSize * Resolution.X),
                        (blockSize * Resolution.Y));
        }
      }
    }

    for (var y = 0; y < 10; y += 1) {
      for (var x = 0; x < 10; x += 1) {
        //draw academy
        if (grida[y][x].IsAcademy === true) {
          ctx.drawImage(academyImage,
                        (x - 0.1) * (blockSize * Resolution.X),
                        y * (blockSize * Resolution.Y),
                        (blockSize * Resolution.X) * 2.11,
                        (blockSize * Resolution.Y) * 2);
          y = 10;
          x = 10;
        }
      }
    }

    //Draw projectiles//
    for (var i = 0;i < bullets.length;i+=1)
    {
      ctx.drawImage(bulletsImage,bullets[i].Position.X,bullets[i].Position.Y,15,15);
    }

    for (var i = 0; i < bugs.length; i += 1) {
      var bug = bugs[i];

      ctx.drawImage(bugImages[bugs[i].ImageIndex], bug.X - (bug.Width / 2), bug.Y - (bug.Height / 2) , bug.Width, bug.Height);
    }
}

function DrawLose() {
  ctx.fillStyle = "#11F122";
  ctx.fillRect(0,0,canvasa.width,canvasa.height);
  ctx.fillStyle = "#F1F122";
  ctx.font = parseInt(Resolution.X / 10) + "px Comic Sans MS";
  ctx.fillText("GAME OVER, MATE!",
              200,
              250);
}
