function testreal(r0){//method(real) -> real
   return r0;//return %0 : real
}

function test(){//method() -> void
   var r1 = 1.1123;//const %1 = 1.1123 : real
   var r0 = testreal(r1);
   var r2 = 1.1123;//const %2 = 1.1123 : real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r2){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 8:
            var r4 = 10.5992;//const %4 = 10.5992 : real
            var r3 = testreal(r4);
            var r5 = 10.5992;//const %5 = 10.5992 : real
            if(r3  !=  r5){
               throw {name: 'Assert Failed', message: 'fail'}
            }
      }
   }
}

test();
