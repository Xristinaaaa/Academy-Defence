function setRoadForLevel() {
    //Setting up the Block grid:
    grida = [];

    for (var y = 0; y < 10; y += 1) {
        var tempGrid = [];
        for (var x = 0; x < 10; x += 1) {
            tempGrid.push(new Block(y, x, 0));
        }
        grida.push(tempGrid);
    }

    //TODO implement generating road from file

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
} 

/*  Setting the path - level 2

    grida[8][0].Type = 1; grida[8][0].Direction = new Vector2(1, 0);
    grida[8][1].Type = 1; grida[8][1].Direction = new Vector2(1, 0);
    grida[8][2].Type = 1; grida[8][2].Direction = new Vector2(1, 0);
    grida[8][3].Type = 1; grida[8][3].Direction = new Vector2(1, 0);
    grida[8][4].Type = 1; grida[8][4].Direction = new Vector2(1, 0);
    grida[8][5].Type = 1; grida[8][5].Direction = new Vector2(1, 0);
    grida[8][6].Type = 1; grida[8][6].Direction = new Vector2(1, 0);
    grida[8][7].Type = 1; grida[8][7].Direction = new Vector2(1, 0);
    grida[8][8].Type = 1; grida[8][8].Direction = new Vector2(0, -1);
    grida[7][8].Type = 1; grida[7][8].Direction = new Vector2(0, -1);
    grida[6][8].Type = 1; grida[6][8].Direction = new Vector2(0, -1);
    grida[5][8].Type = 1; grida[5][8].Direction = new Vector2(-1, 0);
    grida[5][7].Type = 1; grida[5][7].Direction = new Vector2(-1, 0);
    grida[5][6].Type = 1; grida[5][6].Direction = new Vector2(-1, 0);
    grida[5][5].Type = 1; grida[5][5].Direction = new Vector2(-1, 0);
    grida[5][4].Type = 1; grida[5][4].Direction = new Vector2(-1, 0);
    grida[5][3].Type = 1; grida[5][3].Direction = new Vector2(-1, 0);
    grida[5][2].Type = 1; grida[5][2].Direction = new Vector2(-1, 0);
    grida[5][1].Type = 1; grida[5][1].Direction = new Vector2(0, -1);
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
} */