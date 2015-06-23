function f(r0){//function(ConstrainedRecord_Valid_3:btup) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.op;//fieldload %1 = %0 op : {int index,int op}
            var r2 = r0.index;//fieldload %2 = %0 index : {int index,int op}
            var r3 = [r1, r2];
            return r3;//return %3 : [int]
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
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(1);
            var r3 = {op: r1, index: r2};//newrecord %3 = (%1, %2) : {int index,int op}
            var r0 = f(r3);//invoke %0 = (%3) ConstrainedRecord_Valid_3:f : function(ConstrainedRecord_Valid_3:btup) -> [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = [r4, r5];
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1379;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1379:
      }
   }
}

