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
               control_flow_pc = 147;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 148;
            control_flow_repeat = true;
            continue outer;
         case 147:
            var r7 = true;//const %7 = true : bool
            if(r0  ==  r7){
               control_flow_pc = 149;
               control_flow_repeat = true;
               continue outer;
            }
         case 148:
            var r8 = false;//const %8 = false : bool
            control_flow_pc = 150;
            control_flow_repeat = true;
            continue outer;
         case 149:
            var r8 = true;//const %8 = true : bool
         case 150:
            var r9 = true;//const %9 = true : bool
            if(r8  ==  r9){
               control_flow_pc = 151;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 151:
            var r10 = true;//const %10 = true : bool
            if(r0  ==  r10){
               control_flow_pc = 152;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 153;
            control_flow_repeat = true;
            continue outer;
         case 152:
            var r11 = true;//const %11 = true : bool
            if(r1  ==  r11){
               control_flow_pc = 154;
               control_flow_repeat = true;
               continue outer;
            }
         case 153:
            var r12 = false;//const %12 = false : bool
            control_flow_pc = 155;
            control_flow_repeat = true;
            continue outer;
         case 154:
            var r12 = true;//const %12 = true : bool
         case 155:
            var r13 = false;//const %13 = false : bool
            if(r12  ==  r13){
               control_flow_pc = 156;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 156:
            var r14 = true;//const %14 = true : bool
            if(r1  ==  r14){
               control_flow_pc = 157;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 158;
            control_flow_repeat = true;
            continue outer;
         case 157:
            var r15 = true;//const %15 = true : bool
            if(r0  ==  r15){
               control_flow_pc = 159;
               control_flow_repeat = true;
               continue outer;
            }
         case 158:
            var r16 = false;//const %16 = false : bool
            control_flow_pc = 160;
            control_flow_repeat = true;
            continue outer;
         case 159:
            var r16 = true;//const %16 = true : bool
         case 160:
            var r17 = false;//const %17 = false : bool
            if(r16  ==  r17){
               control_flow_pc = 161;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 161:
            var r18 = true;//const %18 = true : bool
            if(r1  ==  r18){
               control_flow_pc = 162;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 163;
            control_flow_repeat = true;
            continue outer;
         case 162:
            var r19 = true;//const %19 = true : bool
            if(r1  ==  r19){
               control_flow_pc = 164;
               control_flow_repeat = true;
               continue outer;
            }
         case 163:
            var r20 = false;//const %20 = false : bool
            control_flow_pc = 165;
            control_flow_repeat = true;
            continue outer;
         case 164:
            var r20 = true;//const %20 = true : bool
         case 165:
            var r21 = false;//const %21 = false : bool
            if(r20  ==  r21){
               control_flow_pc = 166;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 166:
            var r22 = true;//const %22 = true : bool
            if(r1  ==  r22){
               control_flow_pc = 167;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 168;
            control_flow_repeat = true;
            continue outer;
         case 167:
            throw {name: 'Assert Failed', message: 'fail'}
         case 168:
            var r23 = true;//const %23 = true : bool
            if(r0  ==  r23){
               control_flow_pc = 169;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 170;
            control_flow_repeat = true;
            continue outer;
         case 169:
            control_flow_pc = 171;
            control_flow_repeat = true;
            continue outer;
         case 170:
            throw {name: 'Assert Failed', message: 'fail'}
         case 171:
      }
   }
}

test();
