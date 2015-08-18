function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
         case -2:
            var r3 = new WyJS.Integer(10);
            if(WyJS.gt(r0, r3, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(1);
            var r5 = r0.add(r4);//add %5 = %0, %4 : int
            var r0 = r5;//assign %0 = %5  : int
         case 0:
      }
   }
}

