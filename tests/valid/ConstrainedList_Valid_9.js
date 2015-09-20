function sum$Z9dFas1Fc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$tc0$k0kQ$B6$d0VQ$F6$g0FP$B6$o0(r0, r1){//function(ConstrainedList_Valid_9:posintlist,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : int[]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 1632;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
            control_flow_pc = 1633;
            control_flow_repeat = true;
            continue outer;//goto label1633
         case 1632:
            var r4 = r0.getValue(r1);
            var r6 = new WyJS.Integer(1);
            var r7 = r1.add(r6);//add %7 = %1, %6 : int
            var r5 = sum$Z9dFas1Fc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$tc0$k0kQ$B6$d0VQ$F6$g0FP$B6$o0(r0, r7);//invoke %5 = (%0, %7) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist,int) -> int
            var r8 = r4.add(r5);//add %8 = %4, %5 : int
            return r8;//return %8 : int
         case 1633:
            return;
      }
   }
}

function sum$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$ZY5$$6$j0kR$Z5$i0$S$k5$d0kR$Fr2(r0){//function(ConstrainedList_Valid_9:posintlist) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = sum$Z9dFas1Fc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$tc0$k0kQ$B6$d0VQ$F6$g0FP$B6$o0(r0, r2);//invoke %1 = (%0, %2) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist,int) -> int
            return r1;//return %1 : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = sum$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$ZY5$$6$j0kR$Z5$i0$S$k5$d0kR$Fr2(r8);//invoke %0 = (%8) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist) -> int
            var r9 = new WyJS.Integer(28);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1635;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1635:
            return;
      }
   }
}

