function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = true;
            var r2 = r3;//assign %2 = %3  : bool
            var r0 = r2;//assign %0 = %2  : bool
            var r5 = false;
            var r4 = r5;//assign %4 = %5  : bool
            var r1 = r4;//assign %1 = %4  : bool
            var r6 = true;
            if(r0 === r6){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            var r7 = true;
            if(r1 === r7){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
         case 1:
            var r8 = false;
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            var r8 = true;
         case 3:
            var r9 = false;
            if(r8 === r9){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 6;
            control_flow_repeat = true;
            continue outer;//goto label6
         case 5:
            var r11 = true;
            if(r0 === r11){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
         case 6:
            var r12 = false;
            control_flow_pc = 8;
            control_flow_repeat = true;
            continue outer;//goto label8
         case 7:
            var r12 = true;
         case 8:
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
         case 10:
            var r15 = true;
            if(r1 === r15){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
         case 11:
            var r16 = false;
            control_flow_pc = 13;
            control_flow_repeat = true;
            continue outer;//goto label13
         case 12:
            var r16 = true;
         case 13:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 14:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 16;
            control_flow_repeat = true;
            continue outer;//goto label16
         case 15:
            throw {name: 'Assert Failed', message: 'fail'}
         case 16:
            var r19 = true;
            if(r0 === r19){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 18;
            control_flow_repeat = true;
            continue outer;//goto label18
         case 17:
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;//goto label19
         case 18:
            throw {name: 'Assert Failed', message: 'fail'}
         case 19:
      }
   }
}

