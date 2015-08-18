function ExposedSquare$_9dF5e_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$mp0$40$T$$6$j0kR$J5$Z0kJ$36$p0FN$76$_0WAFWz(r0, r1){//function(int,bool) -> Minesweeper:ExposedSquare
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Record(["holdsBomb", "rank"], [r1, r0], new WyJS.Type.Record(["holdsBomb", "rank"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]));
            return r2;//return %2 : {bool holdsBomb,int rank}
      }
   }
}

function HiddenSquare$Z9dFad_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$ml0$70FP$F5$Z0FO$s5$I0FR$J6$W0VR$J53c$(r0, r1){//function(bool,bool) -> Minesweeper:HiddenSquare
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Record(["flagged", "holdsBomb"], [r1, r0], new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r2;//return %2 : {bool flagged,bool holdsBomb}
      }
   }
}

function Board$Z9dFad_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$mK$73$j0FN$76$Z0WAw(r0, r1){//function(int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r4 = r5.clone();//assign %4 = %5  : [void]
            r2 = r4.clone();//assign %2 = %4  : [{bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            while(r3.val < (r0.val * r1.val)){
            	var list = HiddenSquare$Z9dFad_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$ml0$70FP$F5$Z0FO$s5$I0FR$J6$W0VR$J53c$(false, false);
            	r2 = r2.append(new WyJS.List([list],new WyJS.Type.List(new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]))));
        		r3 = r3.add(new WyJS.Integer(1));
            }
         case 1:
            var r16 = new WyJS.Record(["height", "squares", "width"], [r1, r2, r0], new WyJS.Type.Record(["height", "squares", "width"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()])), new WyJS.Type.Int()]));
            return r16;//return %16 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
      }
   }
}

function getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Square
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
      }
   }
}

function setSquare$_9hFXOcL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F53iFAWC$c8$H2$r$cB$a2Vv$cB$92$s$cB$Zn$N9$X2Vu$7B$Z2VmD(r0, r1, r2, r3){//function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
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
      }
   }
}

function flagSquare$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(r0, r1, r2);//invoke %5 = (%0, %1, %2) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
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
            var r14 = setSquare$_9hFXOcL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F53iFAWC$c8$H2$r$cB$a2Vv$cB$92$s$cB$Zn$N9$X2Vu$7B$Z2VmD(r0, r1, r2, r3);//invoke %14 = (%0, %1, %2, %3) Minesweeper:setSquare : function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
            var r0 = r14;//assign %0 = %14  : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
         case 15:
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
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
            var r10 = new WyJS.Integer(Math.max(r11.val, r13.val));
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            while(r4.val < Math.min(r0.fieldLoad("height").val, r2.val + 2)){
            	var c = Math.max(0, r1.val - 1);
            	while(c < Math.min(r0.fieldLoad("width").val,r1.val + 2)){
            		var sq = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(r0, new WyJS.Integer(c), r4);
            		if(sq.fieldLoad("holdsBomb")){
            			r3 = r3.add(new WyJS.Integer(1));
            		}
            		c = c + 1;
            	}
            	r4 = r4.add(new WyJS.Integer(1));
            }
         case 20:
            return r3;//return %3 : int
      }
   }
}

function exposeSquare$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(r0, r1, r2){//function(Minesweeper:Board,int,int) -> Minesweeper:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = getSquare$_9fF5XP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR5$I0FR$J6$W0VR$J53P8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OMsE(r0, r1, r2);//invoke %6 = (%0, %1, %2) Minesweeper:getSquare : function(Minesweeper:Board,int,int) -> Minesweeper:Square
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
            var r9 = ExposedSquare$_9dF5e_k5$o3$d0VQ$J5$n0kS$J5$_0$R$J5$mp0$40$T$$6$j0kR$J5$Z0kJ$36$p0FN$76$_0WAFWz(r4, r10);//invoke %9 = (%4, %10) Minesweeper:ExposedSquare : function(int,bool) -> Minesweeper:ExposedSquare
            var r3 = r9;//assign %3 = %9  : {bool holdsBomb,int rank}
            var r11 = setSquare$_9hFXOcL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F53iFAWC$c8$H2$r$cB$a2Vv$cB$92$s$cB$Zn$N9$X2Vu$7B$Z2VmD(r0, r1, r2, r3);//invoke %11 = (%0, %1, %2, %3) Minesweeper:setSquare : function(Minesweeper:Board,int,int,Minesweeper:Square) -> Minesweeper:Board
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
            var r6 = new WyJS.Integer(Math.max(r7.val, r9.val));
            var r5 = r6;//assign %5 = %6  : int
            var r3 = r5;//assign %3 = %5  : int
            while(r3.val < Math.min(r0.fieldLoad("height").val, r2.val + 2)){
            	var c = Math.max(0, r1.val - 1);
            	while(c < Math.min(r0.fieldLoad("width").val,r1.val + 2)){
            		exposeSquare$Z9fFXOP8g0$C0FP$s5$_0kR$R6$_0FO$$6$_0VR4$10kQ$35$m0$OFs1(r0, new WyJS.Integer(c), r3);
            		c = c + 1;
            	}
            	r3 = r3.add(new WyJS.Integer(1));
            }
         case 34:
            return r0;//return %0 : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
      }
   }
}

function isGameOver$_9bF5C930WL1Q$FI$Z5$i0FO$B6$r0FO$J5$k0FO$7M0VF$w5$W0VR$F54D(r0){//function(Minesweeper:Board) -> (bool,bool)
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
            while(r3.val < r0.fieldLoad("squares").length().val){//loop (%1, %2, %3, %4, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24)
               var r14 = r0.fieldLoad("squares");//fieldload %14 = %0 squares : {int height,[{bool holdsBomb,int rank}|{bool flagged,bool holdsBomb}] squares,int width}
               var r15 = r14.getValue(r3);
               var r13 = r15;//assign %13 = %15  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
               var r4 = r13;//assign %4 = %13  : {bool flagged,bool holdsBomb}|{bool holdsBomb,int rank}
               if(WyJS.is(r4, new WyJS.Type.Record(["flagged", "holdsBomb"], [new WyJS.Type.Bool(), new WyJS.Type.Bool()]))){
                  if(!r4.fieldLoad("holdsBomb")){
                  	r1 = false;
                  }
               }else if(WyJS.is(r4, new WyJS.Type.Record(["holdsBomb", "rank"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))){
               	if(r4.fieldLoad("holdsBomb")){
               		r1 = true;
               		r2 = false;
               		control_flow_pc = 36;
               		control_flow_repeat = true;
               		continue outer;
               	}
               }
               r3 = r3.add(new WyJS.Integer(1));
            }
         case 36:
            var r25 = new WyJS.Tuple([r1, r2], new WyJS.Type.Tuple([new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r25;//return %25 : (bool,bool)
      }
   }
}