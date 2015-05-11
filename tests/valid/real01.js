function test(){//method() -> void
   var r2 = 1.012;//const %2 = 1.012 : real
   var r1 = r2;//assign %1 = %2  : real
   var r0 = r1;//assign %0 = %1  : real
   var r3 = 1.012;//const %3 = 1.012 : real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r3){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 10:
            var r4 = 10.9959;//const %4 = 10.9959 : real
            var r0 = r4;//assign %0 = %4  : real
            var r5 = 10.9959;//const %5 = 10.9959 : real
            if(r0  !=  r5){
               throw {name: 'Assert Failed', message: 'fail'}
            }
      }
   }
}

test();
