function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 0;//const %2 = 0 : int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            while(true){
               var r3 = 10;//const %3 = 10 : int
               if(r0  >=  r3){
                  control_flow_pc = 39;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r4 = 1;//const %4 = 1 : int
               var r5 = r0 + r4;//add %5 = %0, %4 : int
               var r0 = r5;//assign %0 = %5  : int
            }
         case 39:
      }
   }
}

test();
