function Update() {
    //moving bugs
    
    for (var i = 0; i < bugs.length; i += 1) {
        var currentBug = bugs[i];

        //TODO Change Direction When inside grid direction is new
        currentBug.Update();

        console.log(currentBug.Direction);
    }

    UpdateCounter += 1;

    if(UpdateCounter > 29) {
        clearInterval(UpdateInterval);
    }
}