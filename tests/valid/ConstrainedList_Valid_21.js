function Cash$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$72$lF$B3$W0kR$V53sNFP8V2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$k3$d0kR$F6$U0VK$35$g0FP$F5$U0VB$3n$VQ$35$ox2(r0){//function(ConstrainedList_Valid_21:nat[]) -> ConstrainedList_Valid_21:Cash
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.List([r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = r13.clone(new WyJS.Type.Int());//assign %4 = %13  : int[]
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : int[]
            var r15 = new WyJS.Integer(0);
            var r14 = r15;//assign %14 = %15  : int
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r24 = r0.length();//lengthof %24 = %0 : int[]
            if(WyJS.gt(r2, r24, true)){
               control_flow_pc = 158;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = r0.getValue(r2);
            var r25 = r26;//assign %25 = %26  : int
            var r3 = r25;//assign %3 = %25  : int
            var r27 = r1.getValue(r3);
            var r28 = new WyJS.Integer(1);
            var r29 = r27.add(r28);//add %29 = %27, %28 : int
            var r30 = r1.getValue(r3);
            var r31 = new WyJS.Integer(1);
            var r32 = r30.add(r31);//add %32 = %30, %31 : int
            r1.setValue(r3, r32);
            var r33 = new WyJS.Integer(1);
            var r34 = r2.add(r33);//add %34 = %2, %33 : int
            var r2 = r34;//assign %2 = %34  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 158:
            return r1;//return %1 : int[]
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
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = Cash$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$72$lF$B3$W0kR$V53sNFP8V2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$k3$d0kR$F6$U0VK$35$g0FP$F5$U0VB$3n$VQ$35$ox2(r5);//invoke %2 = (%5) ConstrainedList_Valid_21:Cash : function(ConstrainedList_Valid_21:nat[]) -> ConstrainedList_Valid_21:Cash
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 159;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 159:
            var r16 = new WyJS.Integer(6);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(4);
            var r19 = new WyJS.List([r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = Cash$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$72$lF$B3$W0kR$V53sNFP8V2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$k3$d0kR$F6$U0VK$35$g0FP$F5$U0VB$3n$VQ$35$ox2(r19);//invoke %15 = (%19) ConstrainedList_Valid_21:Cash : function(ConstrainedList_Valid_21:nat[]) -> ConstrainedList_Valid_21:Cash
            var r0 = r15.clone(new WyJS.Type.Int());//assign %0 = %15  : int[]
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(1);
            var r27 = new WyJS.Integer(0);
            var r28 = new WyJS.List([r20, r21, r22, r23, r24, r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r28, true)){
               control_flow_pc = 160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 160:
            var r30 = new WyJS.Integer(5);
            var r31 = new WyJS.Integer(5);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.List([r30, r31, r32], new WyJS.Type.List(new WyJS.Type.Int()));
            var r29 = Cash$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$72$lF$B3$W0kR$V53sNFP8V2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$k3$d0kR$F6$U0VK$35$g0FP$F5$U0VB$3n$VQ$35$ox2(r33);//invoke %29 = (%33) ConstrainedList_Valid_21:Cash : function(ConstrainedList_Valid_21:nat[]) -> ConstrainedList_Valid_21:Cash
            var r0 = r29.clone(new WyJS.Type.Int());//assign %0 = %29  : int[]
            var r34 = new WyJS.Integer(0);
            var r35 = new WyJS.Integer(0);
            var r36 = new WyJS.Integer(0);
            var r37 = new WyJS.Integer(1);
            var r38 = new WyJS.Integer(0);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Integer(0);
            var r41 = new WyJS.Integer(0);
            var r42 = new WyJS.List([r34, r35, r36, r37, r38, r39, r40, r41], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r42, true)){
               control_flow_pc = 161;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 161:
            return;
      }
   }
}

