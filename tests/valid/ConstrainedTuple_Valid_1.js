function f$Z9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$J0FS$$6$g0FO$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$K$J6$k0$Q$J5$U0VK$35$g0FP$F5$U0FB3$o0VQ$35$o0(r0){//function(ConstrainedTuple_Valid_1:tnat) -> ConstrainedTuple_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0;//assign %3 = %0  : (int,int)
            var r4 = r3.tupleLoad(0);
            var r1 = r4;//assign %1 = %4  : int
            var r5 = r3.tupleLoad(1);
            var r2 = r5;//assign %2 = %5  : int
            var r6 = r1.add(r2);//add %6 = %1, %2 : int
            return r6;//return %6 : int
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
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Tuple([r2, r3], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : (int,int)
            var r0 = r1;//assign %0 = %1  : (int,int)
            var r5 = f$Z9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$J0FS$$6$g0FO$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$K$J6$k0$Q$J5$U0VK$35$g0FP$F5$U0FB3$o0VQ$35$o0(r0);//invoke %5 = (%0) ConstrainedTuple_Valid_1:f : function(ConstrainedTuple_Valid_1:tnat) -> ConstrainedTuple_Valid_1:nat
            var r6 = new WyJS.Integer(8);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 540;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 540:
            return;
      }
   }
}

