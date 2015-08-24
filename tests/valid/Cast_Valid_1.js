function f$Z9bF5B1Fs1E(r0){//function(int) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.Cast(r0, new WyJS.Type.Real());
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Z9bF5B1Fs1E(r1);//invoke %0 = (%1) Cast_Valid_1:f : function(int) -> real
            var r2 = new WyJS.Real(1.0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2021;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2021:
      }
   }
}

