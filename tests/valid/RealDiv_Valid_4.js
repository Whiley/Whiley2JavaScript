function g$Z9bF5B1Fs1E(r0){//function(int) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(3);
            var r2 = r0.div(r1);//div %2 = %0, %1 : int
            var r3 = WyJS.Cast(r2, new WyJS.Type.Real());
            return r3;//return %3 : real
      }
   }
}

function f$Z9dFa0Y$3i$(r0, r1){//function(int,int) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = g$Z9bF5B1Fs1E(r0);//invoke %2 = (%0) RealDiv_Valid_4:g : function(int) -> real
            return r2;//return %2 : real
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
            var r2 = new WyJS.Integer(2);
            var r0 = f$Z9dFa0Y$3i$(r1, r2);//invoke %0 = (%1, %2) RealDiv_Valid_4:f : function(int,int) -> real
            var r3 = new WyJS.Real(0.0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 450;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 450:
      }
   }
}

