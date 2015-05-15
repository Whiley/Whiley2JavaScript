function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = true;//const %3 = true : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r0 = r2;//assign %0 = %2  : bool
            var r5 = false;//const %5 = false : bool
            var r4 = r5;//assign %4 = %5  : bool
            var r1 = r4;//assign %1 = %4  : bool
            var r6 = true;//const %6 = true : bool
            if(r0  ==  r6){
               control_flow_pc = 55;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 56;
            control_flow_repeat = true;
            continue outer;
         case 55:
            var r7 = true;//const %7 = true : bool
            if(r0  ==  r7){
               control_flow_pc = 57;
               control_flow_repeat = true;
               continue outer;
            }
         case 56:
            var r8 = false;//const %8 = false : bool
            control_flow_pc = 58;
            control_flow_repeat = true;
            continue outer;
         case 57:
            var r8 = true;//const %8 = true : bool
         case 58:
            var r9 = true;//const %9 = true : bool
            if(r8  ==  r9){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 59:
            var r10 = true;//const %10 = true : bool
            if(r0  ==  r10){
               control_flow_pc = 60;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 61;
            control_flow_repeat = true;
            continue outer;
         case 60:
            var r11 = true;//const %11 = true : bool
            if(r1  ==  r11){
               control_flow_pc = 62;
               control_flow_repeat = true;
               continue outer;
            }
         case 61:
            var r12 = false;//const %12 = false : bool
            control_flow_pc = 63;
            control_flow_repeat = true;
            continue outer;
         case 62:
            var r12 = true;//const %12 = true : bool
         case 63:
            var r13 = false;//const %13 = false : bool
            if(r12  ==  r13){
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 64:
            var r14 = true;//const %14 = true : bool
            if(r1  ==  r14){
               control_flow_pc = 65;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 66;
            control_flow_repeat = true;
            continue outer;
         case 65:
            var r15 = true;//const %15 = true : bool
            if(r0  ==  r15){
               control_flow_pc = 67;
               control_flow_repeat = true;
               continue outer;
            }
         case 66:
            var r16 = false;//const %16 = false : bool
            control_flow_pc = 68;
            control_flow_repeat = true;
            continue outer;
         case 67:
            var r16 = true;//const %16 = true : bool
         case 68:
            var r17 = false;//const %17 = false : bool
            if(r16  ==  r17){
               control_flow_pc = 69;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 69:
            var r18 = true;//const %18 = true : bool
            if(r1  ==  r18){
               control_flow_pc = 70;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 71;
            control_flow_repeat = true;
            continue outer;
         case 70:
            var r19 = true;//const %19 = true : bool
            if(r1  ==  r19){
               control_flow_pc = 72;
               control_flow_repeat = true;
               continue outer;
            }
         case 71:
            var r20 = false;//const %20 = false : bool
            control_flow_pc = 73;
            control_flow_repeat = true;
            continue outer;
         case 72:
            var r20 = true;//const %20 = true : bool
         case 73:
            var r21 = false;//const %21 = false : bool
            if(r20  ==  r21){
               control_flow_pc = 74;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 74:
            var r22 = true;//const %22 = true : bool
            if(r1  ==  r22){
               control_flow_pc = 75;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 76;
            control_flow_repeat = true;
            continue outer;
         case 75:
            throw {name: 'Assert Failed', message: 'fail'}
         case 76:
            var r23 = true;//const %23 = true : bool
            if(r0  ==  r23){
               control_flow_pc = 77;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 78;
            control_flow_repeat = true;
            continue outer;
         case 77:
            control_flow_pc = 79;
            control_flow_repeat = true;
            continue outer;
         case 78:
            throw {name: 'Assert Failed', message: 'fail'}
         case 79:
      }
   }
}

test();
