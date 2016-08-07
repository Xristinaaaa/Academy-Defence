//Load Images
var allImages = [];
var trevataImage = document.getElementById("grass");
var dirtImage = document.getElementById("dirt");
var academyImage = document.getElementById("academy");
var bug1Image = document.getElementById("bug1");

allImages.push(trevataImage);
allImages.push(dirtImage);
allImages.push(bug1Image);


var canvasa;
var ctx;
var grida = [];
var bugs = [];

var DrawInterval;
var UpdateInterval;

//TEST COUNTER
var UpdateCounter = 0;

function StartUp() {
  Resolution = new Vector2(window.innerHeight * GameWindowSize, window.innerHeight * GameWindowSize);
  //Setting canvas dimensions and ctx drawing object:
  canvasa = document.getElementById('canvasa');
  canvasa.width = window.innerHeight * EntireCanvasWidth;
  canvasa.height = window.innerHeight * GameWindowSize;

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
  var blockX = Resolution.X * -(blockSize / 2);
  console.log(Resolution);
  var blockY = Resolution.Y * (8.5 * blockSize);

  for (var i = 0; i < 5; i += 1) {
    bugs.push(new Bug(new Vector2(blockX, blockY),
      new Vector2(blockSize * Resolution.X * 0.5, blockSize * Resolution.X * 0.5), 100, 15, i));
  }

  DrawInterval = setInterval(Draw, DrawRefresh);
  UpdateInterval = setInterval(Update, DrawRefresh);

  //On click get block coordinates.
  //If the block isnt of type road and isnt of type tower allow to build tower.
  document.body.addEventListener('click', function (event) {
    var x = event.clientX;
    var y = event.clientY;

    var currentBlock = getBlockFromCoordinates(x, y);

    if (currentBlock.Type == RoadType) {
      throw new Error("Cannot build tower on road!");
    } else {
      if (currentBlock.Tower) {
        throw new Error("You cannot build a tower on top of another tower!");
      } else {
        currentBlock.Type = TowerType;
      }
    }
  });

  function getBlockFromCoordinates(x, y) {
    if ((x > Resolution.X || x < 0) &&
      (y > Resolution.Y || y < 0)) {
      throw new Error("Clicked outside of canvas!");
    }

    var tempX = 0;
    var tempY = 0;
    var tempBlockX = x;
    var tempBlockY = y;

    while (tempBlockX >= Resolution.X / 10) {
      tempBlockX -= Resolution.X / 10;
      tempX += 1;
    }

    while (tempBlockY >= Resolution.Y / 10) {
      tempBlockY -= Resolution.Y / 10;
      tempY += 1;
    }

    return grida[tempY][tempX];
  }
}

window.onload = StartUp;
