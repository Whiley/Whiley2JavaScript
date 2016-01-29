function abs$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 60;
            control_flow_repeat = true;
            continue outer;//goto label60
         case 59:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 60:
            return;
      }
   }
}

function conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r1, r2){//function(TupleType_Valid_5:Pos,int,int) -> bool
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
               control_flow_pc = 61;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.equals(r4, r2, false)){
               control_flow_pc = 62;
               control_flow_repeat = true;
               continue outer;
            }
         case 61:
            var r10 = true;
            return r10;//return %10 : bool
         case 62:
            var r13 = r4.sub(r2);//sub %13 = %4, %2 : int
            var r12 = abs$Y9bFXA$W(r13);//invoke %12 = (%13) TupleType_Valid_5:abs : function(int) -> int
            var r11 = r12;//assign %11 = %12  : int
            var r5 = r11;//assign %5 = %11  : int
            var r16 = r3.sub(r1);//sub %16 = %3, %1 : int
            var r15 = abs$Y9bFXA$W(r16);//invoke %15 = (%16) TupleType_Valid_5:abs : function(int) -> int
            var r14 = r15;//assign %14 = %15  : int
            var r6 = r14;//assign %6 = %14  : int
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 63;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = false;
            control_flow_pc = 64;
            control_flow_repeat = true;
            continue outer;//goto label64
         case 63:
            var r17 = true;
         case 64:
            return r17;//return %17 : bool
            return;
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Tuple([r2, r3], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : (int,int)
            var r0 = r1;//assign %0 = %1  : (int,int)
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r5 = conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r6, r7);//invoke %5 = (%0, %6, %7) TupleType_Valid_5:conflict : function(TupleType_Valid_5:Pos,int,int) -> bool
            var r8 = true;
            if(r5 === r8){
               control_flow_pc = 65;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 65:
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(4);
            var r9 = conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r10, r11);//invoke %9 = (%0, %10, %11) TupleType_Valid_5:conflict : function(TupleType_Valid_5:Pos,int,int) -> bool
            var r12 = true;
            if(r9 === r12){
               control_flow_pc = 66;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 66:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(4);
            var r13 = conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r14, r15);//invoke %13 = (%0, %14, %15) TupleType_Valid_5:conflict : function(TupleType_Valid_5:Pos,int,int) -> bool
            var r16 = true;
            if(r13 === r16){
               control_flow_pc = 67;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 67:
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(2);
            var r17 = conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r18, r19);//invoke %17 = (%0, %18, %19) TupleType_Valid_5:conflict : function(TupleType_Valid_5:Pos,int,int) -> bool
            var r20 = true;
            if(r17 === r20){
               control_flow_pc = 68;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 68:
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Integer(3);
            var r21 = conflict$_9fF5Xc$3P8Z1$J0FS$$6$g0FO$F4$t0$R$J5$U0VK$35$g0FP$F5$U0FC2$F0kQ$Br4y2(r0, r22, r23);//invoke %21 = (%0, %22, %23) TupleType_Valid_5:conflict : function(TupleType_Valid_5:Pos,int,int) -> bool
            var r24 = true;
            if(r21 === r24){
               control_flow_pc = 69;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 70;
            control_flow_repeat = true;
            continue outer;//goto label70
         case 69:
            throw {name: 'Assert Failed', message: 'fail'}
         case 70:
            return;
      }
   }
}

