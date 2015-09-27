function f$Z9bFaL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$n7$74$l$WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$n7$74$m$(r0){//function(Cast_Valid_3:R2) -> Cast_Valid_3:R1
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.cast(new WyJS.Type.Record(["x"], [new WyJS.Type.Real()]), r0);
            return r1;//return %1 : {real x}
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
            var r1 = new WyJS.Integer(123542);
            var r2 = new WyJS.Record(["x"], [r1], new WyJS.Type.Record(["x"], [new WyJS.Type.Int()]));
            var r0 = f$Z9bFaL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$n7$74$l$WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$n7$74$m$(r2);//invoke %0 = (%2) Cast_Valid_3:f : function(Cast_Valid_3:R2) -> Cast_Valid_3:R1
            var r3 = new WyJS.Real(123542.0);
            var r4 = new WyJS.Record(["x"], [r3], new WyJS.Type.Record(["x"], [new WyJS.Type.Real()]));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 2084;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2084:
            return;
      }
   }
}

