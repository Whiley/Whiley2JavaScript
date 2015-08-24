function f$Z9bFaA$0D5Wz(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            return r2;//return %2 : int
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
            var r1 = new WyJS.List([49]);
            var r0 = f$Z9bFaA$0D5Wz(r1);//invoke %0 = (%1) Import_Valid_2:f : function([int]) -> int
            var r2 = new WyJS.Integer(49);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1212;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1212:
      }
   }
}

