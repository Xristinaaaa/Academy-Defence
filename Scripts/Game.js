//Load Images
var allImages = [];
var trevataImage = document.getElementById("grass");
var dirtImage = document.getElementById("dirt");
var academyImage = document.getElementById("academy");
var bug1Image = document.getElementById("bug1");
var hightlight = document.getElementById("hightlight");

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

    setRoadForLevel();

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

        if (currentBlock.Type === RoadType) {
            throw new Error("Cannot build tower on road!");
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
                    }
                }
            }
        }
    });
}

window.onload = StartUp;
