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
            while(true){//loop (%0, %3, %4, %5, %6, %7)
               var r3 = new WyJS.Integer(10);
               var r4 = new WyJS.Integer(9);
               var r5 = new WyJS.Integer(10);
               var r0 = r5;//assign %0 = %5  : int
               var r6 = new WyJS.Integer(1);
               var r7 = r0.add(r6);//add %7 = %0, %6 : int
               var r0 = r7;//assign %0 = %7  : int
            }
         case 0:
      }
   }
}

