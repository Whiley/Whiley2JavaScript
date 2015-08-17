function sign$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1480;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 1481;
            control_flow_repeat = true;
            continue outer;//goto label1481
         case 1480:
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            return r4;//return %4 : int
         case 1481:
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
               control_flow_pc = 1482;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.fieldLoad("col");//fieldload %8 = %0 col : {int col,int row}
            var r9 = r1.fieldLoad("col");//fieldload %9 = %1 col : {int col,int row}
            if(WyJS.equals(r8, r9, false)){
               control_flow_pc = 1483;
               control_flow_repeat = true;
               continue outer;
            }
         case 1482:
            var r10 = false;
            return r10;//return %10 : bool
         case 1483:
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
            while(true){//loop (%5, %20, %21, %22, %23, %24, %25)
               var r20 = r1.fieldLoad("col");//fieldload %20 = %1 col : {int col,int row}
               var r21 = r2.fieldLoad("rows");//fieldload %21 = %2 rows : {bool blackCastleKingSide,bool blackCastleQueenSide,[[null|{bool colour,int kind}]] rows,bool whiteCastleKingSide,bool whiteCastleQueenSide}
               var r22 = r21.getValue(r4);
               var r23 = r22.getValue(r5);
               var r24 = r5.add(r3);//add %24 = %5, %3 : int
               var r5 = r24;//assign %5 = %24  : int
               var r25 = false;
               return r25;//return %25 : bool
            }
         case 1484:
            var r26 = true;
            return r26;//return %26 : bool
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
            var r1 =             var r2 =             var r3 =             var r0 = clearRowExcept$_9fFaWc$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$3n$$J$w5$npHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$7a1$W$sC$12$t$Vgz(r1, r2, r3);//invoke %0 = (%1, %2, %3) Complex_Valid_1:clearRowExcept : function(Complex_Valid_1:Pos,Complex_Valid_1:Pos,Complex_Valid_1:Board) -> bool
            var r4 = false;
            if(r0 === r4){
               control_flow_pc = 1488;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1488:
            var r6 =             var r7 =             var r8 =             var r5 = clearRowExcept$_9fFaWc$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$3n$$J$w5$npHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$7a1$W$sC$12$t$Vgz(r6, r7, r8);//invoke %5 = (%6, %7, %8) Complex_Valid_1:clearRowExcept : function(Complex_Valid_1:Pos,Complex_Valid_1:Pos,Complex_Valid_1:Board) -> bool
            var r9 = true;
            if(r5 === r9){
               control_flow_pc = 1489;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1489:
      }
   }
}

