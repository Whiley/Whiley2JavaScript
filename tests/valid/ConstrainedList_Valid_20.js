function get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r1){//function(ConstrainedList_Valid_20:nat[],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : int[]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 79;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
            control_flow_pc = 80;
            control_flow_repeat = true;
            continue outer;//goto label80
         case 79:
            var r4 = r0.getValue(r1);
            return r4;//return %4 : int
         case 80:
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
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(7);
            var r6 = new WyJS.Integer(9);
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r8.clone(new WyJS.Type.Int());//assign %1 = %8  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r10 = new WyJS.Integer(0);
            var r9 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r10);//invoke %9 = (%0, %10) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r11 = new WyJS.Integer(1);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 81;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 81:
            var r13 = new WyJS.Integer(1);
            var r12 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r13);//invoke %12 = (%0, %13) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r14 = new WyJS.Integer(3);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 82;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 82:
            var r16 = new WyJS.Integer(2);
            var r15 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r16);//invoke %15 = (%0, %16) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r17 = new WyJS.Integer(5);
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 83;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 83:
            var r19 = new WyJS.Integer(3);
            var r18 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r19);//invoke %18 = (%0, %19) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r20 = new WyJS.Integer(7);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 84;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 84:
            var r22 = new WyJS.Integer(4);
            var r21 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r22);//invoke %21 = (%0, %22) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r23 = new WyJS.Integer(9);
            if(WyJS.equals(r21, r23, true)){
               control_flow_pc = 85;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 85:
            var r25 = new WyJS.Integer(5);
            var r24 = get$_9dFas1FVY0d_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$$B2$i0FN$Fr(r0, r25);//invoke %24 = (%0, %25) ConstrainedList_Valid_20:get : function(ConstrainedList_Valid_20:nat[],int) -> int
            var r26 = new WyJS.Integer(11);
            if(WyJS.equals(r24, r26, true)){
               control_flow_pc = 86;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 86:
            return;
      }
   }
}
