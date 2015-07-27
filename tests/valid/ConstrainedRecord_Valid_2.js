function f(r0){//function(ConstrainedRecord_Valid_2:UNIT) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op}
            return r1;//return %1 : int
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
            var r4 = new WyJS.Record(["op"], [r3]);
            var r2 = f(r4);//invoke %2 = (%4) ConstrainedRecord_Valid_2:f : function(ConstrainedRecord_Valid_2:UNIT) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1372;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1372:
      }
   }
}

