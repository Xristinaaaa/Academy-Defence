//Load Images
var allImages = [];
var hubImages = [];
var trevataImage = document.getElementById("grass");
var dirtImage = document.getElementById("dirt");
var academyImage = document.getElementById("academy");
var bug1Image = document.getElementById("bug1");
var hightlight = document.getElementById("hightlight");
var bulletsImage = document.getElementById("bulletGreen");

var towerBaseImage1 = document.getElementById("towerBase1");
var towerBaseImage2 = document.getElementById("towerBase2");
var towerBaseImage3 = document.getElementById("towerBase3");

var towerMenuImage1 = document.getElementById("towerMenu1");
var towerMenuImage2 = document.getElementById("towerMenu2");
var towerMenuImage3 = document.getElementById("towerMenu3");

allImages.push(trevataImage);
allImages.push(dirtImage);
allImages.push(bug1Image);

hubImages.push(document.getElementById("goldStack"));
hubImages.push(document.getElementById("heart"));

var canvasa;
var ctx;
var currentBlock;
var towersMenu = [];
var grida = [];
var bugs = [];
var hubItems = [];
var hubTexts = [];
var towersMenu = [];
var bullets = [];

var towerBaseImages = [towerBaseImage1, towerBaseImage2, towerBaseImage3];
var towerMenuImages = [towerMenuImage1, towerMenuImage2, towerMenuImage3];

//Loading menu texts
//Player Stats
var playerStats = {
                    initGold : 150,
                    initLife : 10,
                    waveNumber : 0
                  };


var towerCanvas = document.getElementById('tower-canvas');
towerCanvas.width = window.innerHeight * EntireCanvasWidth;
towerCanvas.height = window.innerHeight * GameWindowSize;

var towerCanvasCtx = towerCanvas.getContext('2d');

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

    setRoadForLevel();
    
    //Bugs init
    var blockX = Resolution.X * -(blockSize / 2);
    var blockY = Resolution.Y * (8.5 * blockSize);

    //waves of bugs
    setInterval(function () {
        for (var i = 0; i < parseInt(5 + Math.random() * (14 + playerStats.waveNumber * 3)); i += 1) {
            bugs.push(new Bug(new Vector2(blockX, blockY),
                new Vector2(blockSize * Resolution.X * 0.5, blockSize * Resolution.X * 0.5), 100, 15 - parseInt(Math.random() * 10), i * parseInt(Math.random() * 10)));
        }
        playerStats.waveNumber += 1;
    }, 10000);

    DrawInterval = setInterval(Draw, DrawRefresh);
    UpdateInterval = setInterval(Update, DrawRefresh);

    //On click get block coordinates.
    //If the block isnt of type road and isnt of type tower allow to build tower.
    document.body.addEventListener('click', function (event) {
        var x = event.clientX;
        var y = event.clientY;

        if (getBlockFromCoordinates(x, y) !== undefined)
        {
             currentBlock = getBlockFromCoordinates(x, y);
        }

        if (currentBlock !== undefined)
        {
          for (var i = 0;i < towersMenu.length;i+=1){
             towersMenu[i].TryClick(x,y,currentBlock);
          }
        }

        if (currentBlock === undefined || currentBlock.Type === RoadType) {
            throw new Error("Cannot select road blocks!");
        } else {
            for (var y = 0; y < 10; y += 1) {
                for (var x = 0; x < 10; x += 1) {
                    if ((currentBlock.X !== x) || (currentBlock.Y !== y) || currentBlock.IsAcademy === true) {
                        grida[y][x].Highlighted = false;
                    } else {
                        // highlight the clicked block
                        currentBlock.Highlighted = true;
                    }
                }
            }
        }
    });
    //Loading menu items

    var goldImage = hubImages[0];
    var heartImage = hubImages[1];

    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 4),
        (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 0));

    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 2),
        (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 1));

    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 4.7),
        (blockSize * Resolution.X * 2), 22, "#CC2255", playerStats.initGold));

    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 2.6),
        (blockSize * Resolution.X * 2), 22, "#CC2255", playerStats.initLife + "/10"));

    //Adding Towers in menu//
    towersMenu.push(new HubButton(Resolution.X + (blockSize * Resolution.X * 5),
        (blockSize * Resolution.X * 8), (blockSize * Resolution.X * 1.5), (blockSize * Resolution.X * 1.5), 2, 2));

    towersMenu.push(new HubButton(Resolution.X + (blockSize * Resolution.X * 3),
        (blockSize * Resolution.X * 8), (blockSize * Resolution.X * 1.5), (blockSize * Resolution.X * 1.5), 1, 1));

    towersMenu.push(new HubButton(Resolution.X + (blockSize * Resolution.X * 1),
        (blockSize * Resolution.X * 8), (blockSize * Resolution.X * 1.5), (blockSize * Resolution.X * 1.5), 0, 0));
}

window.onload = StartUp;
