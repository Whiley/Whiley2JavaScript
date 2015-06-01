function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 8;//const %4 = 8 : int
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            var r6 = 1;//const %6 = 1 : int
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            var r8 = r0 * r0;//mul %8 = %0, %0 : int
            var r9 = r8 - r1;//sub %9 = %8, %1 : int
            var r7 = r9;//assign %7 = %9  : int
            var r2 = r7;//assign %2 = %7  : int
            var r10 = 63;//const %10 = 63 : int
            if(r2  ==  r10){
               control_flow_pc = 202;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 202:
            var r11 = r0 * r0;//mul %11 = %0, %0 : int
            var r12 = r11 - r1;//sub %12 = %11, %1 : int
            var r2 = r12;//assign %2 = %12  : int
            var r13 = 63;//const %13 = 63 : int
            if(r2  ==  r13){
               control_flow_pc = 203;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 203:
            var r14 = r0 - r1;//sub %14 = %0, %1 : int
            var r15 = r0 * r14;//mul %15 = %0, %14 : int
            var r2 = r15;//assign %2 = %15  : int
            var r16 = 56;//const %16 = 56 : int
            if(r2  ==  r16){
               control_flow_pc = 204;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 204:
      }
   }
}

test();
