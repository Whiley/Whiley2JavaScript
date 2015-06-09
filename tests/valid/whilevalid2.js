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
                  control_flow_pc = 40;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r4 = 9;//const %4 = 9 : int
               if(r0  !=  r4){
                  var r6 = 1;//const %6 = 1 : int
                  var r7 = r0 + r6;//add %7 = %0, %6 : int
                  var r0 = r7;//assign %0 = %7  : int
                  continue;
               }
               var r5 = 10;//const %5 = 10 : int
               var r0 = r5;//assign %0 = %5  : int
               var r6 = 1;//const %6 = 1 : int
               var r7 = r0 + r6;//add %7 = %0, %6 : int
               var r0 = r7;//assign %0 = %7  : int
            }
         case 40:
      }
   }
}

test();
