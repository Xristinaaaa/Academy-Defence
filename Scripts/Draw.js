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
      }
    }

    //ctx.drawImage(academyImage,0.73*window.innerHeight,0.565*window.innerHeight,0.22*window.innerHeight,0.41*window.innerHeight);

    for (var i = 0; i < bugs.length; i += 1) {
      var bug = bugs[i];

      ctx.drawImage(bug1Image, bug.X - (bug.Width / 2), bug.Y - (bug.Height / 2) , bug.Width, bug.Height);
    }

    //Drawing Hub Items
    for (var i = 0; i < hubItems.length; i += 1) {
      ctx.drawImage(hubImages[hubItems[i].ImageIndex], hubItems[i].X - (hubItems[i].Width / 2), hubItems[i].Y- (hubItems[i].Height / 2), hubItems[i].Width, hubItems[i].Height);
    }

    //Drawing Texts

    for(var i = 0; i < hubTexts.length; i += 1) {
      ctx.fillStyle = hubTexts[i].Color;
      ctx.font = hubTexts[i].FontSize + "px Comic Sans MS";
      ctx.strokeText(hubTexts[i].Content,Resolution.X*1.4,Resolution.Y*0.2);
    }

    for (var y = 0; y < 10; y += 1) {
      for (var x = 0; x < 10; x += 1) {
        if (grida[y][x].Highlighted) {
          ctx.drawImage(hightlight, 
                        x * (blockSize * Resolution.X),
                        y * (blockSize * Resolution.Y),
                        (blockSize * Resolution.X),
                        (blockSize * Resolution.Y));
        }
      }
    }
}
