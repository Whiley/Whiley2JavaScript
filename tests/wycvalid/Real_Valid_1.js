function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1.20;//const %3 = 1.20 : real
            var r2 = r3;//assign %2 = %3  : real
            var r0 = r2;//assign %0 = %2  : real
            var r5 = 2.40;//const %5 = 2.40 : real
            var r4 = r5;//assign %4 = %5  : real
            var r1 = r4;//assign %1 = %4  : real
            var r6 = r0 + r1;//add %6 = %0, %1 : real
            var r7 = 3.6;//const %7 = 3.6 : real
            if(r6  ==  r7){
               control_flow_pc = 197;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 197:
            var r8 = r1 - r0;//sub %8 = %1, %0 : real
            var r9 = 1.2;//const %9 = 1.2 : real
            if(r8  ==  r9){
               control_flow_pc = 198;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 198:
            var r10 = r0 / r1;//div %10 = %0, %1 : real
            var r11 = 0.5;//const %11 = 0.5 : real
            if(r10  ==  r11){
               control_flow_pc = 199;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 199:
            var r12 = r0 * r1;//mul %12 = %0, %1 : real
            var r13 = 2.88;//const %13 = 2.88 : real
            if(r12  ==  r13){
               control_flow_pc = 200;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 200:
      }
   }
}

test();
