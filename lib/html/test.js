function test(){//method() -> void
   var r3 = true;//const %3 = true : bool
   var r2 = r3;//assign %2 = %3  : bool
   var r0 = r2;//assign %0 = %2  : bool
   var r5 = false;//const %5 = false : bool
   var r4 = r5;//assign %4 = %5  : bool
   var r1 = r4;//assign %1 = %4  : bool
   var r6 = true;//const %6 = true : bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r6){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
         case 0:
            var r7 = true;//const %7 = true : bool
         case -2 :
            if(r0  !=  r7){
            }
         case 1:
            var r8 = false;//const %8 = false : bool
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;
         case 2:
            var r8 = true;//const %8 = true : bool
         case 3:
            var r9 = true;//const %9 = true : bool
         case -3 :
            if(r8  !=  r9){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 4:
            var r10 = true;//const %10 = true : bool
         case -4 :
            if(r0  !=  r10){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
         case 5:
            var r11 = true;//const %11 = true : bool
         case -5 :
            if(r1  !=  r11){
            }
         case 6:
            var r12 = false;//const %12 = false : bool
            control_flow_pc = 8;
            control_flow_repeat = true;
            continue outer;
         case 7:
            var r12 = true;//const %12 = true : bool
         case 8:
            var r13 = false;//const %13 = false : bool
         case -6 :
            if(r12  !=  r13){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 9:
            var r14 = true;//const %14 = true : bool
         case -7 :
            if(r1  !=  r14){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
         case 10:
            var r15 = true;//const %15 = true : bool
         case -8 :
            if(r0  !=  r15){
            }
         case 11:
            var r16 = false;//const %16 = false : bool
            control_flow_pc = 13;
            control_flow_repeat = true;
            continue outer;
         case 12:
            var r16 = true;//const %16 = true : bool
         case 13:
            var r17 = false;//const %17 = false : bool
         case -9 :
            if(r16  !=  r17){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 14:
            var r18 = true;//const %18 = true : bool
         case -10 :
            if(r1  !=  r18){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
         case 15:
            var r19 = true;//const %19 = true : bool
         case -11 :
            if(r1  !=  r19){
            }
         case 16:
            var r20 = false;//const %20 = false : bool
            control_flow_pc = 18;
            control_flow_repeat = true;
            continue outer;
         case 17:
            var r20 = true;//const %20 = true : bool
         case 18:
            var r21 = false;//const %21 = false : bool
         case -12 :
            if(r20  !=  r21){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 19:
            var r22 = true;//const %22 = true : bool
         case -13 :
            if(r1  !=  r22){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
         case 20:
            throw {name: 'Assert Failed', message: 'fail'}
         case 21:
            var r23 = true;//const %23 = true : bool
         case -14 :
            if(r0  !=  r23){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
         case 22:
            control_flow_pc = 24;
            control_flow_repeat = true;
            continue outer;
         case 23:
            throw {name: 'Assert Failed', message: 'fail'}
         case 24:
      }
   }
}

test();