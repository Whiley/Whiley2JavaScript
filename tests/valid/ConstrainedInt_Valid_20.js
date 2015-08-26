function f$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$$I0VN$w4$i0FN$F63P8w1$20kQ$s5$n0$S$76$W0FP$s5$_0$O$Z3$i0$S$w4$L0FN$k5$d0$O$w4$m$$B4$W0kM$s5$W0$S(r0){//function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r1, false)){
               control_flow_pc = 2372;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 2373;
            control_flow_repeat = true;
            continue outer;//goto label2373
         case 2372:
            var r4 = new WyJS.Integer(1);
            var r5 = r0.sub(r4);//sub %5 = %0, %4 : int
            var r3 = f$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$$I0VN$w4$i0FN$F63P8w1$20kQ$s5$n0$S$76$W0FP$s5$_0$O$Z3$i0$S$w4$L0FN$k5$d0$O$w4$m$$B4$W0kM$s5$W0$S(r5);//invoke %3 = (%5) ConstrainedInt_Valid_20:f : function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
            return r3;//return %3 : int
         case 2373:
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
            var r2 = new WyJS.Integer(0);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = f$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$$I0VN$w4$i0FN$F63P8w1$20kQ$s5$n0$S$76$W0FP$s5$_0$O$Z3$i0$S$w4$L0FN$k5$d0$O$w4$m$$B4$W0kM$s5$W0$S(r0);//invoke %3 = (%0) ConstrainedInt_Valid_20:f : function(ConstrainedInt_Valid_20:a_nat) -> ConstrainedInt_Valid_20:b_nat
            var r0 = r3;//assign %0 = %3  : int
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 2374;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2374:
            return;
      }
   }
}

