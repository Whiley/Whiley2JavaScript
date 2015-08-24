function f$Z9bF5B1Fc_$D$74$_0kN$w5$m0$O$B3$j0VQ$N6$_0VR$B6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB6$m0FO$35$g0$S$J6$kx(r0){//function(RecordConversion_Valid_1:realtup) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("op");//fieldload %3 = %0 op : {real op}
            var r2 = r3;//assign %2 = %3  : real
            var r1 = r2;//assign %1 = %2  : real
            return r1;//return %1 : real
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["op"], [r2], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            var r1 = r3;//assign %1 = %3  : {int op}
            var r0 = r1;//assign %0 = %1  : {int op}
            var r5 = WyJS.Cast(r0, new WyJS.Type.Record(["op"], [new WyJS.Type.Real()]));
            var r4 = f$Z9bF5B1Fc_$D$74$_0kN$w5$m0$O$B3$j0VQ$N6$_0VR$B6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB6$m0FO$35$g0$S$J6$kx(r5);//invoke %4 = (%5) RecordConversion_Valid_1:f : function(RecordConversion_Valid_1:realtup) -> real
            var r6 = new WyJS.Real(1.0);
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 1805;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1805:
      }
   }
}

