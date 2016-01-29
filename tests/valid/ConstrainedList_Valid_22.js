function inc$Z9bF1D527oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O$Fa0$r$7B$cvE(r0){//function(ConstrainedList_Valid_22:nat[]) -> ConstrainedList_Valid_22:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r13 = r0.length();//lengthof %13 = %0 : int[]
            if(WyJS.gt(r2, r13, true)){
               control_flow_pc = 209;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.length();//lengthof %14 = %0 : int[]
            if(WyJS.gt(r1, r14, true)){
               control_flow_pc = 210;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r15 = r0.getValue(r1);
            var r16 = new WyJS.Integer(1);
            var r17 = r15.add(r16);//add %17 = %15, %16 : int
            var r18 = r0.getValue(r1);
            var r19 = new WyJS.Integer(1);
            var r20 = r18.add(r19);//add %20 = %18, %19 : int
            r0.setValue(r1, r20);
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 210:
            var r21 = new WyJS.Integer(1);
            var r22 = r1.add(r21);//add %22 = %1, %21 : int
            var r1 = r22;//assign %1 = %22  : int
            var r23 = new WyJS.Integer(1);
            var r24 = r2.add(r23);//add %24 = %2, %23 : int
            var r2 = r24;//assign %2 = %24  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 209:
            var r26 = new WyJS.Integer(0);
            var r27 = r0.length();//lengthof %27 = %0 : int[]
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r28 = r0.getValue(r25);
            var r29 = new WyJS.Integer(0);
            if(WyJS.lt(r28, r29, false)){
               control_flow_pc = 211;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = 212;
            control_flow_repeat = true;
            continue outer;//goto label212
         case 211:
            throw {name: 'Assert Failed', message: 'fail'}
         case 212:
            return r0;//return %0 : int[]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Array([r1], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = inc$Z9bF1D527oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O$Fa0$r$7B$cvE(r2);//invoke %0 = (%2) ConstrainedList_Valid_22:inc : function(ConstrainedList_Valid_22:nat[]) -> ConstrainedList_Valid_22:nat[]
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Array([r3], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 213;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 213:
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Array([r6, r7, r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = inc$Z9bF1D527oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O$Fa0$r$7B$cvE(r9);//invoke %5 = (%9) ConstrainedList_Valid_22:inc : function(ConstrainedList_Valid_22:nat[]) -> ConstrainedList_Valid_22:nat[]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.Array([r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r5, r13, true)){
               control_flow_pc = 214;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 214:
            var r15 = new WyJS.Integer(10);
            var r16 = new WyJS.Integer(9);
            var r17 = new WyJS.Integer(8);
            var r18 = new WyJS.Integer(7);
            var r19 = new WyJS.Integer(6);
            var r20 = new WyJS.Integer(5);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Array([r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r14 = inc$Z9bF1D527oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1$O$Fa0$r$7B$cvE(r26);//invoke %14 = (%26) ConstrainedList_Valid_22:inc : function(ConstrainedList_Valid_22:nat[]) -> ConstrainedList_Valid_22:nat[]
            var r27 = new WyJS.Integer(11);
            var r28 = new WyJS.Integer(10);
            var r29 = new WyJS.Integer(9);
            var r30 = new WyJS.Integer(8);
            var r31 = new WyJS.Integer(7);
            var r32 = new WyJS.Integer(6);
            var r33 = new WyJS.Integer(5);
            var r34 = new WyJS.Integer(4);
            var r35 = new WyJS.Integer(3);
            var r36 = new WyJS.Integer(2);
            var r37 = new WyJS.Integer(1);
            var r38 = new WyJS.Array([r27, r28, r29, r30, r31, r32, r33, r34, r35, r36, r37], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r38, true)){
               control_flow_pc = 215;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 215:
            return;
      }
   }
}

