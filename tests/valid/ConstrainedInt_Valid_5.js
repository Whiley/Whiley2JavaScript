function f$Y9_FP8s1$20kQ$s5$n0$S$76$W0FP$s5$_0$O$Z3$i0$S$w4$L0FN$k5$d0$O$w4$pB$s5$W0$SFs2(){//function() -> ConstrainedInt_Valid_5:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(1);
            return r0;//return %0 : int
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
            var r0 = f$Y9_FP8s1$20kQ$s5$n0$S$76$W0FP$s5$_0$O$Z3$i0$S$w4$L0FN$k5$d0$O$w4$pB$s5$W0$SFs2();//invoke %0 = () ConstrainedInt_Valid_5:f : function() -> ConstrainedInt_Valid_5:nat
            var r1 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 544;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 544:
            return;
      }
   }
}

