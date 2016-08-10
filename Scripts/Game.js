//Load Images
var allImages = [];
var hubImages=[];
var trevataImage = document.getElementById("grass");
var dirtImage = document.getElementById("dirt");
var academyImage = document.getElementById("academy");
var bug1Image = document.getElementById("bug1");
var hightlight = document.getElementById("hightlight");

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

var canvasa;
var ctx;
var grida = [];
var bugs = [];
var hubItems = [];
var hubTexts = [];

var towerBaseImages = [towerBaseImage1, towerBaseImage2, towerBaseImage3];
var towerMenuImages = [towerMenuImage1, towerMenuImage2, towerMenuImage3];

var towerMenuSelector = 'tower-menu';

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

    for (var i = 0; i < 5; i += 1) {
        bugs.push(new Bug(new Vector2(blockX, blockY),
            new Vector2(blockSize * Resolution.X * 0.5, blockSize * Resolution.X * 0.5), 100, 15 + parseInt(Math.random() * 20), i));
    }

    DrawInterval = setInterval(Draw, DrawRefresh);
    UpdateInterval = setInterval(Update, DrawRefresh);

    //On click get block coordinates.
    //If the block isnt of type road and isnt of type tower allow to build tower.
    document.body.addEventListener('click', function (event) {
        var x = event.clientX;
        var y = event.clientY;

        var currentBlock = getBlockFromCoordinates(x, y);

        if (currentBlock.Type === RoadType) {
            throw new Error("Cannot select road blocks!");
        } else {
            // its not road -> highlight
            // if (currentBlock.Tower) {
            //     throw new Error("You cannot build a tower on top of another tower!");
            // } else {
            //     currentBlock.Type = TowerType;
            // }
            for (var y = 0; y < 10; y += 1) {
                for (var x = 0; x < 10; x += 1) {
                    if ((currentBlock.X !== x) || (currentBlock.Y !== y)) {
                        grida[y][x].Highlighted = false;
                    } else {
                        // highlight the clicked block
                        currentBlock.Highlighted = true;

                        //when hightlighted can build tower from the menu
                        //call the method
                    }
                }
            }
        }
    });
    //Loading menu items

    hubItems.push(new HubElement(Resolution.X+(blockSize*Resolution.X*5),
    (blockSize*Resolution.X*1),(blockSize*Resolution.X*0.5),(blockSize*Resolution.X*0.5), 0));

    //Loading menu texts
    hubTexts.push(new HubText(Resolution.X+(blockSize*Resolution.X*5.5),
    (blockSize*Resolution.X*1),18, "#CC2255", "100"));
}

window.onload = StartUp;
