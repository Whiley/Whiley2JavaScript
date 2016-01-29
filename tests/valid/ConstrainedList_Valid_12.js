function f$Z9bF5D527RWz(r0){//function(int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Array([r0], new WyJS.Type.Array(new WyJS.Type.Int()));
            return r1;//return %1 : int[]
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
            var r1 = new WyJS.Integer(0);
            var r0 = f$Z9bF5D527RWz(r1);//invoke %0 = (%1) ConstrainedList_Valid_12:f : function(int) -> int[]
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Array([r2], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 87;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 87:
            return;
      }
   }
}

