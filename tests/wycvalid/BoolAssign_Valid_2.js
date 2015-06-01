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
               control_flow_pc = 207;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 208;
            control_flow_repeat = true;
            continue outer;
         case 207:
            var r7 = true;//const %7 = true : bool
            if(r0  ==  r7){
               control_flow_pc = 209;
               control_flow_repeat = true;
               continue outer;
            }
         case 208:
            var r8 = false;//const %8 = false : bool
            control_flow_pc = 210;
            control_flow_repeat = true;
            continue outer;
         case 209:
            var r8 = true;//const %8 = true : bool
         case 210:
            var r9 = true;//const %9 = true : bool
            if(r8  ==  r9){
               control_flow_pc = 211;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 211:
            var r10 = true;//const %10 = true : bool
            if(r0  ==  r10){
               control_flow_pc = 212;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 213;
            control_flow_repeat = true;
            continue outer;
         case 212:
            var r11 = true;//const %11 = true : bool
            if(r1  ==  r11){
               control_flow_pc = 214;
               control_flow_repeat = true;
               continue outer;
            }
         case 213:
            var r12 = false;//const %12 = false : bool
            control_flow_pc = 215;
            control_flow_repeat = true;
            continue outer;
         case 214:
            var r12 = true;//const %12 = true : bool
         case 215:
            var r13 = false;//const %13 = false : bool
            if(r12  ==  r13){
               control_flow_pc = 216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 216:
            var r14 = true;//const %14 = true : bool
            if(r1  ==  r14){
               control_flow_pc = 217;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 218;
            control_flow_repeat = true;
            continue outer;
         case 217:
            var r15 = true;//const %15 = true : bool
            if(r0  ==  r15){
               control_flow_pc = 219;
               control_flow_repeat = true;
               continue outer;
            }
         case 218:
            var r16 = false;//const %16 = false : bool
            control_flow_pc = 220;
            control_flow_repeat = true;
            continue outer;
         case 219:
            var r16 = true;//const %16 = true : bool
         case 220:
            var r17 = false;//const %17 = false : bool
            if(r16  ==  r17){
               control_flow_pc = 221;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 221:
            var r18 = true;//const %18 = true : bool
            if(r1  ==  r18){
               control_flow_pc = 222;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 223;
            control_flow_repeat = true;
            continue outer;
         case 222:
            var r19 = true;//const %19 = true : bool
            if(r1  ==  r19){
               control_flow_pc = 224;
               control_flow_repeat = true;
               continue outer;
            }
         case 223:
            var r20 = false;//const %20 = false : bool
            control_flow_pc = 225;
            control_flow_repeat = true;
            continue outer;
         case 224:
            var r20 = true;//const %20 = true : bool
         case 225:
            var r21 = false;//const %21 = false : bool
            if(r20  ==  r21){
               control_flow_pc = 226;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 226:
            var r22 = true;//const %22 = true : bool
            if(r1  ==  r22){
               control_flow_pc = 227;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 228;
            control_flow_repeat = true;
            continue outer;
         case 227:
            throw {name: 'Assert Failed', message: 'fail'}
         case 228:
            var r23 = true;//const %23 = true : bool
            if(r0  ==  r23){
               control_flow_pc = 229;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 230;
            control_flow_repeat = true;
            continue outer;
         case 229:
            control_flow_pc = 231;
            control_flow_repeat = true;
            continue outer;
         case 230:
            throw {name: 'Assert Failed', message: 'fail'}
         case 231:
      }
   }
}

test();
