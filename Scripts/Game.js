var allImages = [];
var trevataImage = new Image;
trevataImage.src = "Images/Grass.png";
allImages.push(trevataImage);
var dirtImage = new Image;
dirtImage.src = "Images/Dirt.png";
allImages.push(dirtImage);
var academyImage = new Image;
academyImage.src = "Images/Academy.png";
var canvasa;
var ctx;
var grida = [];


var testPosition;


function StartUp()
{
  //Setting canvas dimensions and ctx drawing object:
  canvasa = document.getElementById('canvasa');
  canvasa.width = window.innerHeight * 1.55;canvasa.height = window.innerHeight * 0.95;
  ctx = canvasa.getContext('2d');
  ctx.fillStyle="#88FF55";

  testPosition = new Vector2(50,150);
  console.log(testPosition.Y);

  //Setting up the Block grid:
  for (var y = 0;y < 10;y+=1)
  {
    var tempGrid = []
    for (var x = 0;x < 10;x+=1)
    {
        tempGrid.push(new Block(y,x,0));
    }
    grida.push(tempGrid);
  }

  //Setting the Path:
  grida[8][0].Type = 1;
  grida[8][1].Type = 1;
  grida[8][2].Type = 1;
  grida[8][3].Type = 1;
  grida[7][3].Type = 1;
  grida[6][3].Type = 1;
  grida[5][3].Type = 1;
  grida[4][3].Type = 1;
  grida[4][2].Type = 1;
  grida[4][1].Type = 1;
  grida[3][1].Type = 1;
  grida[2][1].Type = 1;
  grida[1][1].Type = 1;
  grida[1][2].Type = 1;
  grida[1][3].Type = 1;
  grida[1][4].Type = 1;
  grida[1][5].Type = 1;
  grida[1][6].Type = 1;
  grida[1][7].Type = 1;
  grida[1][8].Type = 1;
  grida[2][8].Type = 1;
  grida[3][8].Type = 1;
  grida[4][8].Type = 1;
  grida[4][7].Type = 1;
  grida[4][6].Type = 1;
  grida[5][6].Type = 1;
  grida[6][6].Type = 1;
  grida[7][6].Type = 1;
  grida[8][6].Type = 1;
  grida[8][7].Type = 1;


  Draw();
}

window.onload = StartUp;
