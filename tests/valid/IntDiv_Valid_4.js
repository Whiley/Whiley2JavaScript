function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(3);
            var r2 = r0.div(r1);//div %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(10);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) IntDiv_Valid_4:f : function(int) -> int
            var r2 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2409;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2409:
            return;
      }
   }
}

