function f(r0){//function(ConstrainedInt_Valid_12:cr1nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r2 = r0;//assign %2 = %0  : int
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
            var r1 = new WyJS.Integer(9);
            var r0 = f(r1);//invoke %0 = (%1) ConstrainedInt_Valid_12:f : function(ConstrainedInt_Valid_12:cr1nat) -> int
            var r2 = new WyJS.Integer(9);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2288;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2288:
      }
   }
}

