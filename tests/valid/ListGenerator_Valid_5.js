function f$Z9bFaA$0D5Wz(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [int]
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
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r1 = r2.clone();//assign %1 = %2  : [void]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r3 = f$Z9bFaA$0D5Wz(r0);//invoke %3 = (%0) ListGenerator_Valid_5:f : function([int]) -> int
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 1196;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1196:
      }
   }
}

