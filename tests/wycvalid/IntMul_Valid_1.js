function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 2;//const %2 = 2 : int
            var r3 = 3;//const %3 = 3 : int
            var r4 = r2 * r3;//mul %4 = %2, %3 : int
            var r5 = 1;//const %5 = 1 : int
            var r6 = r4 + r5;//add %6 = %4, %5 : int
            var r1 = r6;//assign %1 = %6  : int
            var r0 = r1;//assign %0 = %1  : int
            var r7 = 7;//const %7 = 7 : int
            if(r0  ==  r7){
               control_flow_pc = 145;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 145:
      }
   }
}

test();
