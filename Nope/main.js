// this.dataset.value=="a"
var memoryArray = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h'];
var memoryValues = [];
var memoryTileIds = [];
var flipped = 0;

Array.prototype.memoryTileShuffle = function (){
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){
    flipped = 0;
    var output = '';
    memoryArray.memoryTileShuffle();
    for (var i = 0; i < memoryArray.length; i++) {
        output += '<div id="tile"'+i+'"onclick="memoryFlipTile(this,\''+memoryArray[i]+'\')"></div>';  
    }
    document.getElementById('memo-board').innerHTML = output;
    
}

function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && memoryValues.length < 2){
        tile.style.background == '#FFF';
        tile.innerHTML = val;
        if(memoryValues.length == 0){
            memoryValues.push(val);
            memoryTileIds.push(tile.id);
        } else if (memoryValues.length == 1){
            memoryValues.push(val);
            memoryTileIds.push(tile.id);
            if (memoryValues[0] == memoryValues[1]){
                flipped += 2;
                memoryValues = [];
                memoryTileIds = [];
                if (flipped == memoryArray.length){
                    newBoard();
                }
            } else {
                function flipBack(){
                    var tile1 = document.getElementById(memoryTileIds[0]);
                    var tile2 = document.getElementById(memoryTileIds[1]);
                    tile1.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile1.innerHTML = "";
                    tile2.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile2.innerHTML = "";
                    memoryValues = [];
                    memoryTileIds = [];
                }
                setTimeout (flipBack, 1000);
            }
        }
    }
}
