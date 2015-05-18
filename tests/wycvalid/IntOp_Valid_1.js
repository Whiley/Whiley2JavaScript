function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 112233445566778899;//const %2 = 112233445566778899 : int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = 112233445566778899;//const %3 = 112233445566778899 : int
            if(r0  ==  r3){
               control_flow_pc = 108;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 108:
            var r4 = 1;//const %4 = 1 : int
            var r5 = r0 + r4;//add %5 = %0, %4 : int
            var r0 = r5;//assign %0 = %5  : int
            var r6 = 112233445566778900;//const %6 = 112233445566778900 : int
            if(r0  ==  r6){
               control_flow_pc = 109;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 109:
            var r7 = 556;//const %7 = 556 : int
            var r8 = r0 - r7;//sub %8 = %0, %7 : int
            var r0 = r8;//assign %0 = %8  : int
            var r9 = 112233445566778344;//const %9 = 112233445566778344 : int
            if(r0  ==  r9){
               control_flow_pc = 110;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 110:
            var r10 = 123;//const %10 = 123 : int
            var r11 = r0 * r10;//mul %11 = %0, %10 : int
            var r0 = r11;//assign %0 = %11  : int
            var r12 = 13804713804713736312;//const %12 = 13804713804713736312 : int
            if(r0  ==  r12){
               control_flow_pc = 111;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 111:
            var r13 = 2;//const %13 = 2 : int
            var r14 = r0 / r13;//div %14 = %0, %13 : int
            var r0 = r14;//assign %0 = %14  : int
            var r15 = 6902356902356868156;//const %15 = 6902356902356868156 : int
            if(r0  ==  r15){
               control_flow_pc = 112;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 112:
      }
   }
}

test();
