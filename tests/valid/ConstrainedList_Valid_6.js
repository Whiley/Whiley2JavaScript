function Cash$_9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$N20kF$35$n0$PFVY0d_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$qB$s5$W0$Sz(r0){//function(ConstrainedList_Valid_6:nat[]) -> ConstrainedList_Valid_6:Cash
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
            var r13 = new WyJS.Array([r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r4 = r13.clone(new WyJS.Type.Int());//assign %4 = %13  : int[]
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : int[]
            var r15 = new WyJS.Integer(0);
            var r14 = r15;//assign %14 = %15  : int
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r25 = r0.length();//lengthof %25 = %0 : int[]
            if(WyJS.gt(r2, r25, true)){
               control_flow_pc = 954;
               control_flow_repeat = true;
               continue outer;
            }
            var r27 = r0.getValue(r2);
            var r26 = r27;//assign %26 = %27  : int
            var r3 = r26;//assign %3 = %26  : int
            var r28 = r1.getValue(r3);
            var r29 = new WyJS.Integer(1);
            var r30 = r28.add(r29);//add %30 = %28, %29 : int
            var r31 = r1.getValue(r3);
            var r32 = new WyJS.Integer(1);
            var r33 = r31.add(r32);//add %33 = %31, %32 : int
            r1.setValue(r3, r33);
            var r34 = new WyJS.Integer(1);
            var r35 = r2.add(r34);//add %35 = %2, %34 : int
            var r2 = r35;//assign %2 = %35  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 954:
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
            var r1 = new WyJS.Integer(5);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Array([r1, r2], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = Cash$_9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$N20kF$35$n0$PFVY0d_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$qB$s5$W0$Sz(r3);//invoke %0 = (%3) ConstrainedList_Valid_6:Cash : function(ConstrainedList_Valid_6:nat[]) -> ConstrainedList_Valid_6:Cash
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Array([r4, r5, r6, r7, r8, r9, r10, r11], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 955;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 955:
            var r14 = new WyJS.Integer(6);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(4);
            var r17 = new WyJS.Array([r14, r15, r16], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r13 = Cash$_9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$N20kF$35$n0$PFVY0d_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$qB$s5$W0$Sz(r17);//invoke %13 = (%17) ConstrainedList_Valid_6:Cash : function(ConstrainedList_Valid_6:nat[]) -> ConstrainedList_Valid_6:Cash
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Array([r18, r19, r20, r21, r22, r23, r24, r25], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r13, r26, true)){
               control_flow_pc = 956;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 956:
            var r28 = new WyJS.Integer(5);
            var r29 = new WyJS.Integer(5);
            var r30 = new WyJS.Integer(3);
            var r31 = new WyJS.Array([r28, r29, r30], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r27 = Cash$_9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$N20kF$35$n0$PFVY0d_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$qB$s5$W0$Sz(r31);//invoke %27 = (%31) ConstrainedList_Valid_6:Cash : function(ConstrainedList_Valid_6:nat[]) -> ConstrainedList_Valid_6:Cash
            var r32 = new WyJS.Integer(0);
            var r33 = new WyJS.Integer(0);
            var r34 = new WyJS.Integer(0);
            var r35 = new WyJS.Integer(1);
            var r36 = new WyJS.Integer(0);
            var r37 = new WyJS.Integer(2);
            var r38 = new WyJS.Integer(0);
            var r39 = new WyJS.Integer(0);
            var r40 = new WyJS.Array([r32, r33, r34, r35, r36, r37, r38, r39], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r27, r40, true)){
               control_flow_pc = 957;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 957:
            return;
      }
   }
}

