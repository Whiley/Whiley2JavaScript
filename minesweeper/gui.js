//This file interacts with html button events and turns them into minesweeper actions

var Numbersq = ["images/ExposedBlankSquare.png", "images/ExposedSquare1.png", "images/ExposedSquare2.png", "images/ExposedSquare3.png", "images/ExposedSquare4.png", "images/ExposedSquare5.png", "images/ExposedSquare6.png", "images/ExposedSquare7.png", "images/ExposedSquare8.png"];
var Hiddensq = "images/HiddenSquare.png";
var Bombedsq = "images/ExposedBombSquare.png";
var Flaggedsq = "images/HiddenSquareFlagged.png";
var Board;
var GameOver = false;

function conflict$_9fF5Xc$3P8c0$k$$B$N2$U0FR$J6$_0FO$s5$nC$$4$j0kRh3y$Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VZ$kC$cQ$kC$12$uy2(r0, r1, r2){//function(006_queens:Pos,whiley/lang/Int:nat,whiley/lang/Int:nat) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = r0;//assign %7 = %0  : (int,int)
            var r8 = r7.tupleLoad(0);
            var r3 = r8;//assign %3 = %8  : int
            var r9 = r7.tupleLoad(1);
            var r4 = r9;//assign %4 = %9  : int
            if(WyJS.equals(r3, r1, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.equals(r4, r2, false)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
         case 0:
            var r10 = true;
            return r10;//return %10 : bool
         case 1:
            var r13 = r4.sub(r2);//sub %13 = %4, %2 : int
            var r12 = abs$Y9bFXA$W(r13);//invoke %12 = (%13) whiley/lang/Math:abs : function(int) -> int
            var r11 = r12;//assign %11 = %12  : int
            var r5 = r11;//assign %5 = %11  : int
            var r16 = r3.sub(r1);//sub %16 = %3, %1 : int
            var r15 = abs$Y9bFXA$W(r16);//invoke %15 = (%16) whiley/lang/Math:abs : function(int) -> int
            var r14 = r15;//assign %14 = %15  : int
            var r6 = r14;//assign %6 = %14  : int
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = false;
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            var r17 = true;
         case 3:
            return r17;//return %17 : bool
      }
   }
}

function run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r0, r1, r2){//function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r2, r1, false)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.List([r0], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))));
            return r8;//return %8 : [[(int,int)]]
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;//goto label7
         case 6:
            var r10 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r9 = r10.clone();//assign %9 = %10  : [void]
            r3 = r9.clone();//assign %3 = %9  : [[(int,int)]]
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r4 = r11;//assign %4 = %11  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r13 = r0.length();//lengthof %13 = %0 : [(int,int)]
            if(WyJS.gt(r1, r13, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.length();//lengthof %14 = %0 : [(int,int)]
            if(WyJS.equals(r2, r14, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
         case 8:
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            if(WyJS.gt(r4, r2, true)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            var r16 = true;
            var r15 = r16;//assign %15 = %16  : bool
            var r5 = r15;//assign %5 = %15  : bool
            var r18 = new WyJS.Integer(0);
            var r17 = r18;//assign %17 = %18  : int
            var r6 = r17;//assign %6 = %17  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r19 = r0.length();//lengthof %19 = %0 : [(int,int)]
            if(WyJS.gt(r1, r19, true)){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            var r20 = new WyJS.Integer(0);
            if(WyJS.lt(r6, r20, false)){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = r0.length();//lengthof %21 = %0 : [(int,int)]
            if(WyJS.equals(r2, r21, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
         case 11:
            throw {name: 'Assert Failed', message: 'fail'}
         case 12:
            if(WyJS.gt(r6, r1, true)){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            var r23 = r0.getValue(r6);
            var r22 = r23;//assign %22 = %23  : (int,int)
            var r7 = r22;//assign %7 = %22  : (int,int)
            var r24 = conflict$_9fF5Xc$3P8c0$k$$B$N2$U0FR$J6$_0FO$s5$nC$$4$j0kRh3y$Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VZ$kC$cQ$kC$12$uy2(r7, r1, r4);//invoke %24 = (%7, %1, %4) 006_queens:conflict : function(006_queens:Pos,whiley/lang/Int:nat,whiley/lang/Int:nat) -> bool
            var r25 = true;
            if(r24 === r25){
               control_flow_pc = 14;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 14:
            var r26 = false;
            var r5 = r26;//assign %5 = %26  : bool
            control_flow_pc = 13;
            control_flow_repeat = true;
            continue outer;//goto label13
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 15:
            var r27 = new WyJS.Integer(1);
            var r28 = r6.add(r27);//add %28 = %6, %27 : int
            var r6 = r28;//assign %6 = %28  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 17;
            control_flow_repeat = true;
            break;
         case 13:
            var r29 = true;
            if(r5 === r29){
               control_flow_pc = 16;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 17;
            control_flow_repeat = true;
            continue outer;//goto label17
            control_flow_pc = 17;
            control_flow_repeat = true;
            break;
         case 16:
            var r30 = new WyJS.Tuple([r1, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r31 = new WyJS.Tuple([r1, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r0.setValue(r1, r31);
            var r33 = new WyJS.Integer(1);
            var r34 = r1.add(r33);//add %34 = %1, %33 : int
            var r32 = run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r0, r34, r2);//invoke %32 = (%0, %34, %2) 006_queens:run : function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
            var r35 = r3.append(r32);
            r3 = r35.clone();//assign %3 = %35  : [[(int,int)]]
            control_flow_pc = 17;
            control_flow_repeat = true;
            break;
         case 17:
            var r36 = new WyJS.Integer(1);
            var r37 = r4.add(r36);//add %37 = %4, %36 : int
            var r4 = r37;//assign %4 = %37  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 10:
            return r3;//return %3 : [[(int,int)]]
         case 7:
      }
   }
}

function main$2Ab737oHF4$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$a1Vw$ND$c2Vm$ch2VW$sC$R2Vt$sC$N2Vm1(r0){//method(whiley/lang/System:Console) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(10);
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            var r8 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r7 = r8.clone();//assign %7 = %8  : [void]
            r2 = r7.clone();//assign %2 = %7  : [(int,int)]
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r3 = r9;//assign %3 = %9  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            if(WyJS.gt(r3, r1, true)){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Tuple([r11, r12], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r14 = new WyJS.List([r13], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r15 = r2.append(r14);
            r2 = r15.clone();//assign %2 = %15  : [(int,int)]
            var r16 = new WyJS.Integer(1);
            var r17 = r3.add(r16);//add %17 = %3, %16 : int
            var r3 = r17;//assign %3 = %17  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 18:
            var r18 = r2.length();//lengthof %18 = %2 : [(int,int)]
            if(WyJS.equals(r18, r1, true)){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 19:
            var r21 = new WyJS.Integer(0);
            var r20 = run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r2, r21, r1);//invoke %20 = (%2, %21, %1) 006_queens:run : function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
            r19 = r20.clone();//assign %19 = %20  : [[(int,int)]]
            r4 = r19.clone();//assign %4 = %19  : [[(int,int)]]
      }
   }
}

test$X9_7VkE();

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