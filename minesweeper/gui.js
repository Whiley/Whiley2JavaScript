//This file interacts with html button events and turns them into minesweeper actions

var Numbersq = ["images/ExposedBlankSquare.png", "images/ExposedSquare1.png", "images/ExposedSquare2.png", "images/ExposedSquare3.png", "images/ExposedSquare4.png", "images/ExposedSquare5.png", "images/ExposedSquare6.png", "images/ExposedSquare7.png", "images/ExposedSquare8.png"];
var Hiddensq = "images/HiddenSquare.png";
var Bombedsq = "images/ExposedBombSquare.png";
var Flaggedsq = "images/HiddenSquareFlagged.png";
var Board;
var GameOver = false;

//starts the game with a height, width and number of bombs
function CreateGame(y, x, nBombs){
	if(Board != undefined){
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

	Board = Board$Z9dFad_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$mK$73$j0FN$76$Z0WAw(new WyJS.Integer(y), new WyJS.Integer(x));
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
		var wat = exposeSquare$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(Board, new WyJS.Integer(x), new WyJS.Integer(y));
		updateGUI();
	}
	else{
		var wat = flagSquare$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(Board, new WyJS.Integer(x), new WyJS.Integer(y));
		updateGUI();
	}
	console.log(Board);
};

function updateGUI(){
	var sq = Board.fieldLoad("squares");
	var image = "";
	for(var x = 0; x != Board.fieldLoad("width").val; x++){
		for(var y = 0; y != Board.fieldLoad("height").val; y++){
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
	isGameOver();
}

function isGameOver(){
	var tup = isGameOver$_9bF5C930WL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F54D(Board);
	if(tup.tupleLoad(0)){
		if(tup.tupleLoad(1)){
			console.log("YOU WIN");
		}else{
			console.log("YOU LOSE");
		}
		for(var i = 0; i < Board.fieldLoad("width").val; i++){
			for(var j = 0; j < Board.fieldLoad("height").val; j++){
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
	var sq = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(Board, new WyJS.Integer(x), new WyJS.Integer(y));
	return sq.hasKey("rank");
}

function holdsBomb(x, y){
	var sq = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(Board, new WyJS.Integer(x), new WyJS.Integer(y));
	var um = sq.fieldLoad("holdsBomb");
	return um==true;
}

function getRank(x, y){
	var sq = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(Board, new WyJS.Integer(x), new WyJS.Integer(y));
	return sq.fieldLoad("rank").val;
}
 function isFlagged(x, y){
 	var sq = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(Board, new WyJS.Integer(x), new WyJS.Integer(y));
 	var um = sq.fieldLoad("flagged");
 	return um == true;
 }
function initialiseBoard(nBombs){
	var bombs = [];
	var nSquares = Board.fieldLoad("width").val * Board.fieldLoad("height").val;
	for(var i = 0; i < nSquares - nBombs; i++){
		bombs.push(false);
	}
	for(var j = 0; j < nBombs; j++){
		bombs.push(true);
	}
	var shuffled = shuffle(bombs);
	var ehh = 0;
	for(var x = 0; x < Board.fieldLoad("width").val; x++){
		for(var y = 0; y < Board.fieldLoad("height").val; y++){
			var index = x + (y*Board.fieldLoad("width").val);
			if(bombs[index]){
				var hidden = HiddenSquare$Z9dFad_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$ml0$70FP$F5$Z0FO$s5$I0FR$J6$W0VR$J53c$(true, false);
				Board = setSquare$_9hFXOcL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F53iFAWC$c8$H2$r$cB$a2Vv$cB$92$s$cB$Zn$N9$X2Vu$7B$Z2VmD(Board, new WyJS.Integer(x), new WyJS.Integer(y), hidden);
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