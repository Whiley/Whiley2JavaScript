function f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$B20kN$w5$Z0FO(r0){//function(ConstrainedInt_Valid_13:code) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("op");//fieldload %3 = %0 op : {int op,int[] payload}
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Array([r2], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r4 = new WyJS.Record(["op", "payload"], [r1, r3], new WyJS.Type.Record(["op", "payload"], [new WyJS.Type.Int(), new WyJS.Type.Array(new WyJS.Type.Int())]));
            var r0 = f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$B20kN$w5$Z0FO(r4);//invoke %0 = (%4) ConstrainedInt_Valid_13:f : function(ConstrainedInt_Valid_13:code) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1291;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1291:
            return;
      }
   }
}

