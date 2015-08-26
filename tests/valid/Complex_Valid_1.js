function sign$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1491;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 1492;
            control_flow_repeat = true;
            continue outer;//goto label1492
         case 1491:
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            return r4;//return %4 : int
         case 1492:
            return;
      }
   }
}

function clearRowExcept$_9fFaWc$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$3n$$J$w5$npHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$7a1$W$sC$12$t$Vgz(r0, r1, r2){//function(Complex_Valid_1:Pos,Complex_Valid_1:Pos,Complex_Valid_1:Board) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = r0.fieldLoad("row");//fieldload %6 = %0 row : {int col,int row}
            var r7 = r1.fieldLoad("row");//fieldload %7 = %1 row : {int col,int row}
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 1493;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.fieldLoad("col");//fieldload %8 = %0 col : {int col,int row}
            var r9 = r1.fieldLoad("col");//fieldload %9 = %1 col : {int col,int row}
            if(WyJS.equals(r8, r9, false)){
               control_flow_pc = 1494;
               control_flow_repeat = true;
               continue outer;
            }
         case 1493:
            var r10 = false;
            return r10;//return %10 : bool
         case 1494:
            var r13 = r0.fieldLoad("col");//fieldload %13 = %0 col : {int col,int row}
            var r14 = r1.fieldLoad("col");//fieldload %14 = %1 col : {int col,int row}
            var r12 = sign$Y9dFXs1Fs2(r13, r14);//invoke %12 = (%13, %14) Complex_Valid_1:sign : function(int,int) -> int
            var r11 = r12;//assign %11 = %12  : int
            var r3 = r11;//assign %3 = %11  : int
            var r16 = r0.fieldLoad("row");//fieldload %16 = %0 row : {int col,int row}
            var r15 = r16;//assign %15 = %16  : int
            var r4 = r15;//assign %4 = %15  : int
            var r18 = r0.fieldLoad("col");//fieldload %18 = %0 col : {int col,int row}
            var r19 = r18.add(r3);//add %19 = %18, %3 : int
            var r17 = r19;//assign %17 = %19  : int
            var r5 = r17;//assign %5 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r20 = r1.fieldLoad("col");//fieldload %20 = %1 col : {int col,int row}
            if(WyJS.equals(r5, r20, true)){
               control_flow_pc = 1495;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = r2.fieldLoad("rows");//fieldload %21 = %2 rows : {bool blackCastleKingSide,bool blackCastleQueenSide,[[null|{bool colour,int kind}]] rows,bool whiteCastleKingSide,bool whiteCastleQueenSide}
            var r22 = r21.getValue(r4);
            var r23 = r22.getValue(r5);
if(WyJS.is(r23, new WyJS.Type.Null())){
               control_flow_pc = 1496;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 1497;
            control_flow_repeat = true;
            continue outer;//goto label1497
            control_flow_pc = 1498;
            control_flow_repeat = true;
            break;
         case 1496:
            var r24 = r5.add(r3);//add %24 = %5, %3 : int
            var r5 = r24;//assign %5 = %24  : int
            control_flow_pc = 1498;
            control_flow_repeat = true;
            continue outer;//goto label1498
            control_flow_pc = 1498;
            control_flow_repeat = true;
            break;
         case 1497:
            var r25 = false;
            return r25;//return %25 : bool
            control_flow_pc = 1498;
            control_flow_repeat = true;
            break;
         case 1498:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1495:
            var r26 = true;
            return r26;//return %26 : bool
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Record([col, row] ,[new WyJS.Integer(1), new WyJS.Integer(1)] ,new WyJS.Type.Record(["col", "row"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = new WyJS.Record([col, row] ,[new WyJS.Integer(8), new WyJS.Integer(1)] ,new WyJS.Type.Record(["col", "row"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r3 = new WyJS.Record([whiteCastleQueenSide, whiteCastleKingSide, blackCastleKingSide, rows, blackCastleQueenSide] ,[true, true, true, new WyJS.List([new WyJS.List([new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(4)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(5)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(4)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(5)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])))], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Type.List(new WyJS.Type.Null())]))), true] ,new WyJS.Type.Record(["blackCastleKingSide", "blackCastleQueenSide", "rows", "whiteCastleKingSide", "whiteCastleQueenSide"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Type.List(new WyJS.Type.Null())])), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            var r0 = clearRowExcept$_9fFaWc$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$3n$$J$w5$npHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$7a1$W$sC$12$t$Vgz(r1, r2, r3);//invoke %0 = (%1, %2, %3) Complex_Valid_1:clearRowExcept : function(Complex_Valid_1:Pos,Complex_Valid_1:Pos,Complex_Valid_1:Board) -> bool
            var r4 = false;
            if(r0 === r4){
               control_flow_pc = 1499;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1499:
            var r6 = new WyJS.Record([col, row] ,[new WyJS.Integer(1), new WyJS.Integer(3)] ,new WyJS.Type.Record(["col", "row"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r7 = new WyJS.Record([col, row] ,[new WyJS.Integer(4), new WyJS.Integer(3)] ,new WyJS.Type.Record(["col", "row"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r8 = new WyJS.Record([whiteCastleQueenSide, whiteCastleKingSide, blackCastleKingSide, rows, blackCastleQueenSide] ,[true, true, true, new WyJS.List([new WyJS.List([new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(4)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(5)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[true, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([null, null, null, null, null, null, null, null], new WyJS.Type.List(new WyJS.Type.Null())), new WyJS.List([new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(0)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))), new WyJS.List([new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(4)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(5)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(2)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(1)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Record([colour, kind] ,[false, new WyJS.Integer(3)] ,new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])))], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Type.List(new WyJS.Type.Null())]))), true] ,new WyJS.Type.Record(["blackCastleKingSide", "blackCastleQueenSide", "rows", "whiteCastleKingSide", "whiteCastleQueenSide"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.List(new WyJS.Type.Record(["colour", "kind"], [new WyJS.Type.Bool(), new WyJS.Type.Int()])), new WyJS.Type.List(new WyJS.Type.Null())])), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            var r5 = clearRowExcept$_9fFaWc$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$3n$$J$w5$npHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$7a1$W$sC$12$t$Vgz(r6, r7, r8);//invoke %5 = (%6, %7, %8) Complex_Valid_1:clearRowExcept : function(Complex_Valid_1:Pos,Complex_Valid_1:Pos,Complex_Valid_1:Board) -> bool
            var r9 = true;
            if(r5 === r9){
               control_flow_pc = 1500;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1500:
            return;
      }
   }
}

