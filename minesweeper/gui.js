//This file interacts with html button events and turns them into minesweeper actions

var Numbersq = ["images/ExposedBlankSquare.png", "images/ExposedSquare1.png", "images/ExposedSquare2.png", "images/ExposedSquare3.png", "images/ExposedSquare4.png", "images/ExposedSquare5.png", "images/ExposedSquare6.png", "images/ExposedSquare7.png", "images/ExposedSquare8.png"];
var Hiddensq = "images/HiddenSquare.png";
var Bombedsq = "images/ExposedBombSquare.png";
var Flaggedsq = "images/HiddenSquareFlagged.png";
var BoardState;
var GameOver = false;

//starts the game with a height, width and number of bombs
function CreateGame(y, x, nBombs){
	if(BoardState != undefined){
		return;
	}
	var div = document.getElementById("minesweeper");
	var minesweeper = document.createElement("TABLE");
	width = 0;
	height = 0;
	for (var i = x - 1; i >= 0; i--) {
		var row = document.createElement("TR");
		for (var f = y - 1; f >= 0; f--) {
			var col = document.createElement("TD");
			col.innerHTML = '<img src="images/HiddenSquare.png" class="square" height=30 width=30 onclick="buttonclick(this);" xVal="' + width + '" yVal= "' + height + '" id="' + width.toString() + 'h' + height.toString() + 'w">';
			row.appendChild(col);
			width++;
		}
		minesweeper.appendChild(row);
		height++;
		width = 0;
	};
	document.getElementById("minesweeper").appendChild(minesweeper);
	var flag = document.createElement("BUTTON");
	flag.setAttribute("onclick","changeFlag();");
	flag.innerHTML = "Togge Flag";
	document.getElementById("minesweeper").appendChild(flag);

	BoardState = Board(new WyJS.Integer(y), new WyJS.Integer(x));
	initialiseBoard(nBombs);
};

var flagSet = false;
//Flag is used to flat squares
function changeFlag(){
	if(!flagSet){
		document.getElementById("minesweeper").setAttribute("style", "cursor:help;");
		flagSet = true;
	} else{
		document.getElementById("minesweeper").setAttribute("style", "cursor:auto;");
		flagSet = false;
	};
};

function buttonclick(but){
	x = but.getAttribute("xVal");
	y = but.getAttribute("yVal");
	if(!flagSet){
		var wat = exposeSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
		updateGUI();
	}
	else{
		var wat = flagSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
		updateGUI();
	}
};

function updateGUI(){
	var sq = BoardState.fieldLoad("squares");
	var image = "";
	for(var x = 0; x != BoardState.fieldLoad("width").val; x++){
		for(var y = 0; y != BoardState.fieldLoad("height").val; y++){
			if(isExposedSquare(x, y)){
				if(holdsBomb(x, y)){
					//set bomb image
					image = Bombedsq;
				}else{
					var rank = getRank(x, y);
					//set image to appropriate rank
					image = Numbersq[rank];
				}
			} else if(isFlagged(x, y)){
				//set to flagged image
				image = Flaggedsq;
			} else{
				//set to hidden square
				image = Hiddensq;
			}
			updateSquare(x, y, image);
			image = "";
		}
	}
	isOver();
}

function isOver(){
	var tup = isGameOver(BoardState);
	if(tup.tupleLoad(0)){
		if(tup.tupleLoad(1)){
			console.log("YOU WIN");
		}else{
			console.log("YOU LOSE");
		}
		for(var i = 0; i < BoardState.fieldLoad("width").val; i++){
			for(var j = 0; j < BoardState.fieldLoad("height").val; j++){
				if(!isExposedSquare(i, j)){
					if(holdsBomb(i, j)){
						updateSquare(i, j, Bombedsq);
					}
				}
			}
		}
	}
}

function updateSquare(x, y, image){
	var sqs = document.getElementById(x.toString() + "h" + y.toString() + "w");
	//console.log(x.toString() + "" + y.toString());
	//for(var i = 0; i < sqs.length; i++){
		//if((sqs.getAttribute("xVal") == x) && (sqs.getAttribute("yVal") == y)){
			//console.log(image);
			sqs.setAttribute("src", image);
		//}
	//}
}

function isExposedSquare(x, y){
	var sq = getSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
	return sq.hasKey("rank");
}

function holdsBomb(x, y){
	var sq = getSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
	var um = sq.fieldLoad("holdsBomb");
	return um==true;
}

function getRank(x, y){
	var sq = getSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
	return sq.fieldLoad("rank").val;
}
 function isFlagged(x, y){
 	var sq = getSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y));
 	var um = sq.fieldLoad("flagged");
 	return um == true;
 }
function initialiseBoard(nBombs){
	var bombs = [];
	var nSquares = BoardState.fieldLoad("width").val * BoardState.fieldLoad("height").val;
	for(var i = 0; i < nSquares - nBombs; i++){
		bombs.push(false);
	}
	for(var j = 0; j < nBombs; j++){
		bombs.push(true);
	}
	var shuffled = shuffle(bombs);
	var ehh = 0;
	for(var x = 0; x < BoardState.fieldLoad("width").val; x++){
		for(var y = 0; y < BoardState.fieldLoad("height").val; y++){
			var index = x + (y*BoardState.fieldLoad("width").val);
			if(bombs[index]){
				var hidden = HiddenSquare(true, false);
				Board = setSquare(BoardState, new WyJS.Integer(x), new WyJS.Integer(y), hidden);
			}
		}
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}