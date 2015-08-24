function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.Cast(r0, new WyJS.Type.Int());
            return r1;//return %1 : int
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
            var r1 = new WyJS.Integer(72);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Coercion_Valid_3:f : function(int) -> int
            var r2 = new WyJS.Integer(72);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1365;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1365:
      }
   }
}

