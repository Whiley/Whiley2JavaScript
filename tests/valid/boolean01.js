function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = true;//const %2 = true : bool
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : bool
            var r3 = true;//const %3 = true : bool
            if(r0  ==  r3){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
            var r4 = false;//const %4 = false : bool
            var r0 = r4;//assign %0 = %4  : bool
            var r5 = false;//const %5 = false : bool
            if(r0  ==  r5){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 7:
      }
   }
}

test();
