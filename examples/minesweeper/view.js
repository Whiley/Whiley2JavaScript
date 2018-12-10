var SQUARE_WIDTH=30;
var SQUARE_HEIGHT=30;

/**
 * Determine the appropriate image to use for rendering this square.
 */
function selectSquareImage(game,square) {
    if(is$n13ExposedSquare(square)) {
	if(square.holdsBomb) {
	    return game.bomb;
	} else {
	    return game.exposed[square.rank];
	}
    } else if(square.flagged) {
	return game.flagged;
    } else {
	return game.hidden;
    }
}

/**
 * Render square at given position to canvas
 */
function drawSquare(game,x,y) {
    var canvas = game.canvas;
    var ctx = canvas.getContext("2d");
    var square = getSquare(game.board,x,y);
    var image = selectSquareImage(game,square);
    ctx.drawImage(image,x*SQUARE_WIDTH,y*SQUARE_HEIGHT,SQUARE_WIDTH,SQUARE_HEIGHT);    
}

/**
 * Render the game board
 */
function drawBoard(game) {
    var board = game.board;
    for(var x=0;x<board.width;x=x+1) {
	for(var y=0;y<board.width;y=y+1) {
            drawSquare(game,x,y);
       }
    }
}

/**
 * Randomly select a bomb (or not).  This consider the number of
 * remaining squares as well as the number of remaning bombs to
 * allocated.
 */
function randomBomb(nBombs,remaining) {
    var dice = Math.floor(Math.random() * remaining);
    return dice <= nBombs;
}

/**
 * Construct a random board of given dimensions and number of bombs.
 * All bombs are placed randomly on the board.
 */
function createRandomBoard(width,height,nBombs) {
    var board = Board(width,height);
    var remaining = width * height;
    for(var x=0;x<board.width;x=x+1) {
	for(var y=0;y<board.height;y=y+1) {
	    var bomb = randomBomb(nBombs,remaining);
	    var square = HiddenSquare(bomb,false);
	    board = setSquare(board,x,y,square);
	    if(bomb) { nBombs = nBombs - 1; }
	    remaining = remaining - 1;
	}
    }
    return board;
}

/**
 * Update the board state after a left click on the board.  This
 * exposes a square on the board which, in turn, may recursively
 * expose additional squares as well.
 */
function onExposeEvent(game, x, y) {
    // Convert coordinates into squares, rather than pixels
    x = Math.floor(x / SQUARE_WIDTH);
    y = Math.floor(y / SQUARE_HEIGHT);
    // Update the board model
    game.board = exposeSquare(game.board,x,y);
    // Redraw the board
    drawBoard(game);
    //
    var tmp = isGameOver(game.board);
    //
    if(tmp[0]) {
	if(tmp[1]) {
	    alert("Well done --- You Found all the Mines!");
	} else {
	    alert("Game Over --- You Lost!");
	}
    } 
}

/**
 * Update the board state after a right click on the board.  This
 * marks a hidden square as being flagged, and has no effect on an
 * exposed square.
 */
function onFlagEvent(game, x, y) {
    // Convert coordinates into squares, rather than pixels
    x = Math.floor(x / SQUARE_WIDTH);
    y = Math.floor(y / SQUARE_HEIGHT);
    // Update the board model
    game.board = flagSquare(game.board,x,y);
    // Redraw the board
    drawBoard(game);
}

/**
 * Create a new game of Minesweeper
 */
function startGame(document) {
    // Construct a game object which contains the board state, and
    // also provides access to the images necessary for rendering.
    var game = {
	// Create random board
	board: createRandomBoard(10,10,10),
	// Provide access to images for rendering
	bomb: document.getElementById("bomb"),
	hidden: document.getElementById("hidden"),
	flagged: document.getElementById("flagged"),
	exposed: [document.getElementById("blank"),
	          document.getElementById("one"),
		  document.getElementById("two"),
		  document.getElementById("three"),
		  document.getElementById("four")],
	// Provide access to canvas for rendering
	canvas: document.getElementById("myCanvas")
    };
    // Render the board for the first time
    drawBoard(game);    
    // Configure mouse listener to capture events
    game.canvas.addEventListener("click", function(event) {
	if(event.shiftKey) {
	    onFlagEvent(game,event.offsetX,event.offsetY);
	} else {
	    onExposeEvent(game,event.offsetX,event.offsetY);
	}
    }, false);
}
