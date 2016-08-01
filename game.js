var allImages = [];
var trevataImage = new Image;
trevataImage.src = "Grass.png";
allImages.push(trevataImage);
var dirtImage = new Image;
dirtImage.src = "Dirt.png";
allImages.push(dirtImage);
var canvasa;
var ctx;
var grida = [];
for (var y = 0;y < 10;y+=1)
{
  var tempGrid = []
  for (var x = 0;x < 10;x+=1)
  {
      tempGrid.push(new Block(y,x,0));
  }
  grida.push(tempGrid);
}
grida[2][3].Type = 1;

var testPosition;


function StartUp()
{
  canvasa = document.getElementById('canvasa');
  canvasa.width = window.innerHeight * 1.55;canvasa.height = window.innerHeight * 0.95;
  ctx = canvasa.getContext('2d');
  ctx.fillStyle="#88FF55";

  testPosition = new Vector2(50,150);
  console.log(testPosition.Y);


  Draw();
}

window.onload = StartUp;

function Draw()
{
    ctx.fillRect(0,0,canvasa.width,canvasa.height);

    ctx.drawImage(trevataImage,0,0,50,50);

    for (var y = 0;y < 10;y+=1)
    {
      for (var x = 0;x < 10;x+=1)
      {
         ctx.drawImage(allImages[grida[y][x].Type],x*(0.095*window.innerHeight),y*(0.095*window.innerHeight),(0.096*window.innerHeight),(0.096*window.innerHeight));
      }
    }
}
