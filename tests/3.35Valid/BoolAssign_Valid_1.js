function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = true;
            r1 = r2;//assign %1 = %2  : bool
            r0 = r1;//assign %0 = %1  : bool
            var r3 = true;
            if(r0 === r3){
               control_flow_pc = 2004;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2004:
            var r4 = false;
            r0 = r4;//assign %0 = %4  : bool
            var r5 = false;
            if(r0 === r5){
               control_flow_pc = 2005;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2005:
      }
   }
}

