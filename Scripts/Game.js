//Load Images
var allImages = [];
var trevataImage = new Image;
trevataImage.src = "Images/Grass.png";
allImages.push(trevataImage);
var dirtImage = new Image;
dirtImage.src = "Images/Dirt.png";
allImages.push(dirtImage);
var academyImage = new Image;
academyImage.src = "Images/Academy.png";
var bug1Image = new Image;
bug1Image.src = "Images/Bug1.png";

var canvasa;
var ctx;
var grida = [];
var bugs = [];

var DrawInterval;
var UpdateInterval;

//TEST COUNTER
var UpdateCounter = 0;

function StartUp() {
  Resolution = new Vector2(window.innerHeight * 0.95, window.innerHeight * 0.95);
  //Setting canvas dimensions and ctx drawing object:
  canvasa = document.getElementById('canvasa');
  canvasa.width = window.innerHeight * 1.55;
  canvasa.height = window.innerHeight * 0.95;

  ctx = canvasa.getContext('2d');
  ctx.fillStyle = "#88FF55";

  //Setting up the Block grid:
  for (var y = 0; y < 10; y += 1) {
    var tempGrid = []
    for (var x = 0; x < 10; x += 1) {
      tempGrid.push(new Block(y, x, 0));
    }
    grida.push(tempGrid);
  }

  //Setting the Path:
  grida[8][0].Type = 1; grida[8][0].Direction = new Vector2(1, 0);
  grida[8][1].Type = 1; grida[8][1].Direction = new Vector2(1, 0);
  grida[8][2].Type = 1; grida[8][2].Direction = new Vector2(1, 0);
  grida[8][3].Type = 1; grida[8][3].Direction = new Vector2(0, -1);
  grida[7][3].Type = 1; grida[7][3].Direction = new Vector2(0, -1);
  grida[6][3].Type = 1; grida[6][3].Direction = new Vector2(0, -1);
  grida[5][3].Type = 1; grida[5][3].Direction = new Vector2(0, -1);
  grida[4][3].Type = 1; grida[4][3].Direction = new Vector2(-1, 0);
  grida[4][2].Type = 1; grida[4][2].Direction = new Vector2(-1, 0);
  grida[4][1].Type = 1; grida[4][1].Direction = new Vector2(0, -1);
  grida[3][1].Type = 1; grida[3][1].Direction = new Vector2(0, -1);
  grida[2][1].Type = 1; grida[2][1].Direction = new Vector2(0, -1);
  grida[1][1].Type = 1; grida[1][1].Direction = new Vector2(1, 0);
  grida[1][2].Type = 1; grida[1][2].Direction = new Vector2(1, 0);
  grida[1][3].Type = 1; grida[1][3].Direction = new Vector2(1, 0);
  grida[1][4].Type = 1; grida[1][4].Direction = new Vector2(1, 0);
  grida[1][5].Type = 1; grida[1][5].Direction = new Vector2(1, 0);
  grida[1][6].Type = 1; grida[1][6].Direction = new Vector2(1, 0);
  grida[1][7].Type = 1; grida[1][7].Direction = new Vector2(1, 0);
  grida[1][8].Type = 1; grida[1][8].Direction = new Vector2(0, 1);
  grida[2][8].Type = 1; grida[2][8].Direction = new Vector2(0, 1);
  grida[3][8].Type = 1; grida[3][8].Direction = new Vector2(0, 1);
  grida[4][8].Type = 1; grida[4][8].Direction = new Vector2(-1, 0);
  grida[4][7].Type = 1; grida[4][7].Direction = new Vector2(-1, 0);
  grida[4][6].Type = 1; grida[4][6].Direction = new Vector2(0, 1);
  grida[5][6].Type = 1; grida[5][6].Direction = new Vector2(0, 1);
  grida[6][6].Type = 1; grida[6][6].Direction = new Vector2(0, 1);
  grida[7][6].Type = 1; grida[7][6].Direction = new Vector2(0, 1);
  grida[8][6].Type = 1; grida[8][6].Direction = new Vector2(1, 0);
  grida[8][7].Type = 1; grida[8][7].Direction = new Vector2(1, 0);

  //Bugs init
  for (var i = 0; i < 5; i += 1) {
    bugs.push(new Bug(new Vector2(Resolution.X * 0.0425, Resolution.Y * 0.85), 100, 10, -20 * i));
  }

  DrawInterval = setInterval(Draw, 200);
  UpdateInterval = setInterval(Update, 1000);


}

window.onload = StartUp;
