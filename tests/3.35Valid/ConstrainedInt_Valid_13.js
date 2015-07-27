function f(r0){//function(ConstrainedInt_Valid_13:code) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("op");//fieldload %3 = %0 op : {int op,[int] payload}
            r2 = r3;//assign %2 = %3  : int
            r1 = r2;//assign %1 = %2  : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.List([r2], new WyJS.List('int'));
            var r4 = new WyJS.Record(["op", "payload"], [r1, r3], new WyJS.Type.Record(["op", "payload"], '{int op,[int] payload}'));
            var r0 = f(r4);//invoke %0 = (%4) ConstrainedInt_Valid_13:f : function(ConstrainedInt_Valid_13:code) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 2291;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2291:
      }
   }
}

