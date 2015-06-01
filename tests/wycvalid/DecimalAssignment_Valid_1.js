function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 5.0;//const %2 = 5.0 : real
            var r1 = r2;//assign %1 = %2  : real
            var r0 = r1;//assign %0 = %1  : real
            var r3 = 5.0;//const %3 = 5.0 : real
            if(r0  ==  r3){
               control_flow_pc = 171;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 171:
            var r4 = 3.234;//const %4 = 3.234 : real
            var r0 = r4;//assign %0 = %4  : real
            var r5 = 3.234;//const %5 = 3.234 : real
            if(r0  ==  r5){
               control_flow_pc = 172;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 172:
            var r6 = 5.242325252;//const %6 = 5.242325252 : real
            var r0 = r6;//assign %0 = %6  : real
            var r7 = 5.242325252;//const %7 = 5.242325252 : real
            if(r0  ==  r7){
               control_flow_pc = 173;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 173:
            var r8 = -1.0;//const %8 = -1.0 : real
            var r0 = r8;//assign %0 = %8  : real
            var r9 = -1.0;//const %9 = -1.0 : real
            if(r0  ==  r9){
               control_flow_pc = 174;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 174:
            var r10 = -1.232;//const %10 = -1.232 : real
            var r0 = r10;//assign %0 = %10  : real
            var r11 = -1.232;//const %11 = -1.232 : real
            if(r0  ==  r11){
               control_flow_pc = 175;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 175:
      }
   }
}

test();
