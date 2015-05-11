function testbool(r0){//method(bool) -> bool
   return r0;//return %0 : bool
}

function test(){//method() -> void
   var r1 = true;//const %1 = true : bool
   var r0 = testbool(r1);
   var r2 = true;//const %2 = true : bool
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
         case 12:
            var r4 = false;//const %4 = false : bool
            var r3 = testbool(r4);
            var r5 = false;//const %5 = false : bool
            if(r3  !=  r5){
               throw {name: 'Assert Failed', message: 'fail'}
            }
      }
   }
}

test();
