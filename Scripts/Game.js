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
hubImages.push(towerBaseImage1);
hubImages.push(towerBaseImage2);
hubImages.push(towerBaseImage3);

var initGold;
var initLife;
var initTower1;
var initTower2;
var initTower3;

var canvasa;
var ctx;
var grida = [];
var bugs = [];
var hubItems = [];
var hubTexts = [];
var bullets = [];

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

    grida[7][1].Tower = new Tower(2,new Vector2(Resolution.X*blockSize*1.5,Resolution.X*blockSize*7.5),15, 42);

    //Bugs init
    var numOfBugs= parseInt(Math.random()*100) + 1;
    var blockX = Resolution.X * -(blockSize / 2);
    var blockY = Resolution.Y * (8.5 * blockSize);

    for (var i = 0; i < numOfBugs; i += 1) {   
         (function(i) {
            setTimeout(function() { 
            bugs.push(new Bug(new Vector2(blockX, blockY),
                new Vector2(blockSize * Resolution.X * 0.5, blockSize * Resolution.X * 0.5), 100, 15 - parseInt(Math.random() * 10), i));
            }, 3000);
        })(i);
    }

    DrawInterval = setInterval(Draw, DrawRefresh);
    UpdateInterval = setInterval(Update, DrawRefresh);

    //On click get block coordinates.
    //If the block isnt of type road and isnt of type tower allow to build tower.
    document.body.addEventListener('click', function (event) {
        event.target.style.cursor='pointer';
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
                        currentBlock.Tower = new Tower(0,new Vector2(Resolution.X*blockSize*1.5,Resolution.X*blockSize*7.5),15, 42);
                        
                        //when hightlighted can build tower from the menu
                        //the tower position should be handled by the factory method
                        //call the method
                    }
                }
            }
        }
    });
    //Loading menu items
    //push gold and heart
    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 4),
        (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 0));
    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 2),
        (blockSize * Resolution.X * 1), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 1));

    //push towers
    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 4.8),
        (blockSize * Resolution.X * 5), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 2));
    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 2.9),
        (blockSize * Resolution.X * 5), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 3));
    hubItems.push(new HubElement(Resolution.X + (blockSize * Resolution.X * 0.9),
        (blockSize * Resolution.X * 5), (blockSize * Resolution.X * 0.5), (blockSize * Resolution.X * 0.5), 4));

    //Loading menu texts
    initGold = 150;
    initLife = 10;

    initTower1= {
        numOfTower: "Tower 1",
        range: "Range: short",
        damage: "Damage: med",
        cost: "Cost: 50"};
    initTower2= {
        numOfTower: "Tower 2",
        range: "Range: med",
        damage: "Damage: med",
        cost: "Cost: 60"};
    initTower3= {
        numOfTower: "Tower 3",
        range: "Range: long",
        damage: "Damage: large",
        cost: "Cost: 75"};

    //push gold and heart text
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 3.7),
        (blockSize * Resolution.X * 2), 22, "#CC2255", initGold));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 1.6),
        (blockSize * Resolution.X * 2), 22, "#CC2255", initLife + "/10"));

    //push towers text
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 0.3),
        (blockSize * Resolution.X * 6), 22, "#666600", initTower1.numOfTower));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 0.3),
        (blockSize * Resolution.X * 6.5), 22, "#666600", initTower1.range));   
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 0.3),
        (blockSize * Resolution.X * 7), 22, "#666600", initTower1.damage));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 0.3),
        (blockSize * Resolution.X * 7.5), 22, "#666600", initTower1.cost));

        
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 2.3),
        (blockSize * Resolution.X * 6), 22, "#006666", initTower2.numOfTower));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 2.3),
        (blockSize * Resolution.X * 6.5), 22, "#006666", initTower2.range));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 2.3),
        (blockSize * Resolution.X * 7), 22, "#006666", initTower2.damage));
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 2.3),
        (blockSize * Resolution.X * 7.5), 22, "#006666", initTower2.cost));

    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 4.3),
        (blockSize * Resolution.X * 6), 22, "#FF0000", initTower3.numOfTower));  
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 4.3),
        (blockSize * Resolution.X * 6.5), 22, "#FF0000", initTower3.range));  
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 4.3),
        (blockSize * Resolution.X * 7), 22, "#FF0000", initTower3.damage));  
    hubTexts.push(new HubText(Resolution.X + (blockSize * Resolution.X * 4.3),
        (blockSize * Resolution.X * 7.5), 22, "#FF0000", initTower3.cost));  
}

window.onload = StartUp;
