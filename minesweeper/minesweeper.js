function ExposedSquare(r0, r1){//function(int,bool) -> Minesweeper:ExposedSquare
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Record(["holdsBomb", "rank"], [r1, r0], new WyJS.Type.Record(["holdsBomb", "rank"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            return r2;//return %2 : {bool holdsBomb,int rank}
            return;
      }
   }
}

function HiddenSquare(r0, r1){//function(bool,bool) -> Minesweeper:HiddenSquare
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Record(["flagged", "holdsBomb"], [r1, r0], new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r2;//return %2 : {bool flagged,bool holdsBomb}
            return;
      }
   }
}

function Board(r0, r1){//function(int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = r5.clone(new WyJS.Type.Void());//assign %4 = %5  : [void]
            var r2 = r4.clone(new WyJS.Type.Union([new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]), new WyJS.Type.Record(["holdsBomb", "rank"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])]));//assign %2 = %4  : [{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r8 = r0.mul(r1);//mul %8 = %0, %1 : int
            if(WyJS.gt(r3, r8, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = false;
            var r11 = false;
            var r9 = HiddenSquare(r10, r11);//invoke %9 = (%10, %11) Minesweeper:HiddenSquare : function(bool,bool) -> Minesweeper:HiddenSquare
            var r12 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()])));
            var r13 = r2.append(r12);
            var r2 = r13.clone(new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]));//assign %2 = %13  : [{bool flagged,bool holdsBomb}]
            var r14 = new WyJS.Integer(1);
            var r15 = r3.add(r14);//add %15 = %3, %14 : int
            var r3 = r15;//assign %3 = %15  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1:
            var r16 = new WyJS.Record(["height", "squares", "width"], [r1, r2, r0], new WyJS.Type.Record(["height", "squares", "width"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()])), new WyJS.Type.Int()]));
            return r16;//return %16 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            return;
      }
   }
}

function getSquare(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Square
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.fieldLoad("width");//fieldload %5 = %0 width : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r6 = r5.mul(r2);//mul %6 = %5, %2 : int
            var r4 = r6;//assign %4 = %6  : int
            var r3 = r4;//assign %3 = %4  : int
            var r7 = r0.fieldLoad("squares");//fieldload %7 = %0 squares : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r8 = r3.add(r1);//add %8 = %3, %1 : int
            var r9 = r7.getValue(r8);
            return r9;//return %9 : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            return;
      }
   }
}

function setSquare(r0, r1, r2, r3){//function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = r0.fieldLoad("width");//fieldload %6 = %0 width : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r7 = r6.mul(r2);//mul %7 = %6, %2 : int
            var r5 = r7;//assign %5 = %7  : int
            var r4 = r5;//assign %4 = %5  : int
            var r8 = r4.add(r1);//add %8 = %4, %1 : int
            r0.fieldLoad("squares").setValue(r8, r3);
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            return;
      }
   }
}

function flagSquare(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = getSquare(r0, r1, r2);//invoke %5 = (%0, %1, %2) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
            var r4 = r5;//assign %4 = %5  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r3 = r4;//assign %3 = %4  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            if(WyJS.is(r3, new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]))){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
         case 14:
            var r6 = r3.fieldLoad("flagged");//fieldload %6 = %3 flagged : {bool flagged,bool holdsBomb}
            var r8 = r3.fieldLoad("flagged");//fieldload %8 = %3 flagged : {bool flagged,bool holdsBomb}
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = true;
            control_flow_pc = 17;
            control_flow_repeat = true;
            continue outer;//goto label17
         case 16:
            var r7 = false;
         case 17:
            var r10 = r3.fieldLoad("flagged");//fieldload %10 = %3 flagged : {bool flagged,bool holdsBomb}
            var r12 = r3.fieldLoad("flagged");//fieldload %12 = %3 flagged : {bool flagged,bool holdsBomb}
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = true;
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;//goto label19
         case 18:
            var r11 = false;
         case 19:
            r3.setValue("flagged", r11);
            var r14 = setSquare(r0, r1, r2, r3);//invoke %14 = (%0, %1, %2, %3) Minesweeper:setSquare : function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
            var r0 = r14;//assign %0 = %14  : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
         case 15:
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            return;
      }
   }
}

function determineRank$Z9fFa7i$3P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$O(r0, r1, r2){//function(Minesweeper:Board,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(1);
            var r13 = r2.sub(r12);//sub %13 = %2, %12 : int
            var r10 = max$Y9dFXs1Fs2(r11, r13);//invoke %10 = (%11, %13) whiley/lang/Math:max : function(int,int) -> int
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r15 = r0.fieldLoad("height");//fieldload %15 = %0 height : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r16 = new WyJS.Integer(2);
            var r17 = r2.add(r16);//add %17 = %2, %16 : int
            var r14 = min$Y9dFXs1Fs2(r15, r17);//invoke %14 = (%15, %17) whiley/lang/Math:min : function(int,int) -> int
            if(WyJS.gt(r4, r14, true)){
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(1);
            var r22 = r1.sub(r21);//sub %22 = %1, %21 : int
            var r19 = max$Y9dFXs1Fs2(r20, r22);//invoke %19 = (%20, %22) whiley/lang/Math:max : function(int,int) -> int
            var r18 = r19;//assign %18 = %19  : int
            var r5 = r18;//assign %5 = %18  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r24 = r0.fieldLoad("width");//fieldload %24 = %0 width : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r25 = new WyJS.Integer(2);
            var r26 = r1.add(r25);//add %26 = %1, %25 : int
            var r23 = min$Y9dFXs1Fs2(r24, r26);//invoke %23 = (%24, %26) whiley/lang/Math:min : function(int,int) -> int
            if(WyJS.gt(r5, r23, true)){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
            var r28 = getSquare(r0, r5, r4);//invoke %28 = (%0, %5, %4) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
            var r27 = r28;//assign %27 = %28  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r6 = r27;//assign %6 = %27  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r29 = r6.fieldLoad("holdsBomb");//fieldload %29 = %6 holdsBomb : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r30 = true;
            if(r29 === r30){
               control_flow_pc = 22;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 23;
            control_flow_repeat = true;
            continue outer;//goto label23
            control_flow_pc = 23;
            control_flow_repeat = true;
            break;
         case 22:
            var r31 = new WyJS.Integer(1);
            var r32 = r3.add(r31);//add %32 = %3, %31 : int
            var r3 = r32;//assign %3 = %32  : int
            control_flow_pc = 23;
            control_flow_repeat = true;
            break;
         case 23:
            var r33 = new WyJS.Integer(1);
            var r34 = r5.add(r33);//add %34 = %5, %33 : int
            var r5 = r34;//assign %5 = %34  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 21;
            control_flow_repeat = true;
            break;
         case 21:
            var r35 = new WyJS.Integer(1);
            var r36 = r4.add(r35);//add %36 = %4, %35 : int
            var r4 = r36;//assign %4 = %36  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 20:
            return r3;//return %3 : int
            return;
      }
   }
}

function exposeSquare(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = getSquare(r0, r1, r2);//invoke %6 = (%0, %1, %2) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
            var r5 = r6;//assign %5 = %6  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r3 = r5;//assign %3 = %5  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r8 = determineRank$Z9fFa7i$3P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$O(r0, r1, r2);//invoke %8 = (%0, %1, %2) Minesweeper:determineRank : function(Minesweeper:Board,int,int) -> int
            var r7 = r8;//assign %7 = %8  : int
            var r4 = r7;//assign %4 = %7  : int
            if(WyJS.is(r3, new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]))){
               control_flow_pc = 28;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 29;
            control_flow_repeat = true;
            continue outer;//goto label29
         case 28:
            var r10 = r3.fieldLoad("holdsBomb");//fieldload %10 = %3 holdsBomb : {bool flagged,bool holdsBomb}
            var r9 = ExposedSquare(r4, r10);//invoke %9 = (%4, %10) Minesweeper:ExposedSquare : function(int,bool) -> Minesweeper:ExposedSquare
            var r3 = r9;//assign %3 = %9  : {bool holdsBomb,int rank}
            var r11 = setSquare(r0, r1, r2, r3);//invoke %11 = (%0, %1, %2, %3) Minesweeper:setSquare : function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
            var r0 = r11;//assign %0 = %11  : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r12 = new WyJS.Integer(0);
            if(WyJS.equals(r4, r12, false)){
               control_flow_pc = 29;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = exposeNeighbours$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(r0, r1, r2);//invoke %13 = (%0, %1, %2) Minesweeper:exposeNeighbours : function(Minesweeper:Board,int,int) -> Minesweeper:Board
            return r13;//return %13 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
         case 29:
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            return;
      }
   }
}

function exposeNeighbours$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(1);
            var r9 = r2.sub(r8);//sub %9 = %2, %8 : int
            var r6 = max$Y9dFXs1Fs2(r7, r9);//invoke %6 = (%7, %9) whiley/lang/Math:max : function(int,int) -> int
            var r5 = r6;//assign %5 = %6  : int
            var r3 = r5;//assign %3 = %5  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            var r11 = r0.fieldLoad("height");//fieldload %11 = %0 height : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r12 = new WyJS.Integer(2);
            var r13 = r2.add(r12);//add %13 = %2, %12 : int
            var r10 = min$Y9dFXs1Fs2(r11, r13);//invoke %10 = (%11, %13) whiley/lang/Math:min : function(int,int) -> int
            if(WyJS.gt(r3, r10, true)){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(1);
            var r18 = r1.sub(r17);//sub %18 = %1, %17 : int
            var r15 = max$Y9dFXs1Fs2(r16, r18);//invoke %15 = (%16, %18) whiley/lang/Math:max : function(int,int) -> int
            var r14 = r15;//assign %14 = %15  : int
            var r4 = r14;//assign %4 = %14  : int
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
         case -7:
            var r20 = r0.fieldLoad("width");//fieldload %20 = %0 width : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r21 = new WyJS.Integer(2);
            var r22 = r1.add(r21);//add %22 = %1, %21 : int
            var r19 = min$Y9dFXs1Fs2(r20, r22);//invoke %19 = (%20, %22) whiley/lang/Math:min : function(int,int) -> int
            if(WyJS.gt(r4, r19, true)){
               control_flow_pc = 35;
               control_flow_repeat = true;
               continue outer;
            }
            var r23 = exposeSquare(r0, r4, r3);//invoke %23 = (%0, %4, %3) Minesweeper:exposeSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Board
            var r0 = r23;//assign %0 = %23  : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r24 = new WyJS.Integer(1);
            var r25 = r4.add(r24);//add %25 = %4, %24 : int
            var r4 = r25;//assign %4 = %25  : int
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
            control_flow_pc = 35;
            control_flow_repeat = true;
            break;
         case 35:
            var r26 = new WyJS.Integer(1);
            var r27 = r3.add(r26);//add %27 = %3, %26 : int
            var r3 = r27;//assign %3 = %27  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 34:
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            return;
      }
   }
}

function isGameOver(r0){//function(Minesweeper:Board) -> (bool,bool)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = true;
            var r5 = r6;//assign %5 = %6  : bool
            var r1 = r5;//assign %1 = %5  : bool
            var r8 = true;
            var r7 = r8;//assign %7 = %8  : bool
            var r2 = r7;//assign %2 = %7  : bool
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r3 = r9;//assign %3 = %9  : int
            control_flow_pc = -8;
            control_flow_repeat = true;
            break;
         case -8:
            var r11 = r0.fieldLoad("squares");//fieldload %11 = %0 squares : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r12 = r11.length();//lengthof %12 = %11 : [{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}]
            if(WyJS.gt(r3, r12, true)){
               control_flow_pc = 36;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.fieldLoad("squares");//fieldload %14 = %0 squares : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
            var r15 = r14.getValue(r3);
            var r13 = r15;//assign %13 = %15  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            var r4 = r13;//assign %4 = %13  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
            if(WyJS.is(r4, new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]))){
               control_flow_pc = 37;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -9;
               control_flow_repeat = true;
               break;
            }
         case -9:
            control_flow_pc = 38;
            control_flow_repeat = true;
            continue outer;//goto label38
            control_flow_pc = 39;
            control_flow_repeat = true;
            break;
         case 37:
            var r16 = r4.fieldLoad("holdsBomb");//fieldload %16 = %4 holdsBomb : {bool flagged,bool holdsBomb}
            var r17 = true;
            if(r16 === r17){
               control_flow_pc = 38;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -10;
               control_flow_repeat = true;
               break;
            }
         case -10:
            var r18 = false;
            var r1 = r18;//assign %1 = %18  : bool
            control_flow_pc = 39;
            control_flow_repeat = true;
            continue outer;//goto label39
            control_flow_pc = 39;
            control_flow_repeat = true;
            break;
         case 38:
            if(WyJS.is(r4, new WyJS.Type.Record(["holdsBomb", "rank"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))){
               control_flow_pc = 40;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -11;
               control_flow_repeat = true;
               break;
            }
         case -11:
            control_flow_pc = 39;
            control_flow_repeat = true;
            continue outer;//goto label39
            control_flow_pc = 39;
            control_flow_repeat = true;
            break;
         case 40:
            var r19 = r4.fieldLoad("holdsBomb");//fieldload %19 = %4 holdsBomb : {bool holdsBomb,int rank}
            var r20 = true;
            if(r19 === r20){
               control_flow_pc = 41;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -12;
               control_flow_repeat = true;
               break;
            }
         case -12:
            control_flow_pc = 39;
            control_flow_repeat = true;
            continue outer;//goto label39
            control_flow_pc = 39;
            control_flow_repeat = true;
            break;
         case 41:
            var r21 = true;
            var r1 = r21;//assign %1 = %21  : bool
            var r22 = false;
            var r2 = r22;//assign %2 = %22  : bool
            control_flow_pc = 36;
            control_flow_repeat = true;
            continue outer;//goto label36
            control_flow_pc = 39;
            control_flow_repeat = true;
            break;
         case 39:
            var r23 = new WyJS.Integer(1);
            var r24 = r3.add(r23);//add %24 = %3, %23 : int
            var r3 = r24;//assign %3 = %24  : int
            control_flow_pc = -8;
            control_flow_repeat = true;
            break;
         case 36:
            var r25 = new WyJS.Tuple([r1, r2], new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r25;//return %25 : (bool,bool)
            return;
      }
   }
}

