function f$Z9bFaA$WL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VB3$K0VI$Z3$J0(r0){//function(ConstrainedRecord_Valid_2:UNIT) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op}
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["op"], [r3], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            var r2 = f$Z9bFaA$WL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VB3$K0VI$Z3$J0(r4);//invoke %2 = (%4) ConstrainedRecord_Valid_2:f : function(ConstrainedRecord_Valid_2:UNIT) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 818;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 818:
            return;
      }
   }
}

