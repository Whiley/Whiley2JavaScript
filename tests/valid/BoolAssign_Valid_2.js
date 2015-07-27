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
               control_flow_pc = 2053;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2054;
            control_flow_repeat = true;
            continue outer;//goto label2054
         case 2053:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 2055;
               control_flow_repeat = true;
               continue outer;
            }
         case 2054:
            var r8 = false;
            control_flow_pc = 2056;
            control_flow_repeat = true;
            continue outer;//goto label2056
         case 2055:
            var r8 = true;
         case 2056:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 2057;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2057:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 2058;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2059;
            control_flow_repeat = true;
            continue outer;//goto label2059
         case 2058:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 2060;
               control_flow_repeat = true;
               continue outer;
            }
         case 2059:
            var r12 = false;
            control_flow_pc = 2061;
            control_flow_repeat = true;
            continue outer;//goto label2061
         case 2060:
            var r12 = true;
         case 2061:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 2062;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2062:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 2063;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2064;
            control_flow_repeat = true;
            continue outer;//goto label2064
         case 2063:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 2065;
               control_flow_repeat = true;
               continue outer;
            }
         case 2064:
            var r16 = false;
            control_flow_pc = 2066;
            control_flow_repeat = true;
            continue outer;//goto label2066
         case 2065:
            var r16 = true;
         case 2066:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 2067;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2067:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 2068;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2069;
            control_flow_repeat = true;
            continue outer;//goto label2069
         case 2068:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 2070;
               control_flow_repeat = true;
               continue outer;
            }
         case 2069:
            var r20 = false;
            control_flow_pc = 2071;
            control_flow_repeat = true;
            continue outer;//goto label2071
         case 2070:
            var r20 = true;
         case 2071:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 2072;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2072:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 2073;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2074;
            control_flow_repeat = true;
            continue outer;//goto label2074
         case 2073:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2074:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 2075;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2076;
            control_flow_repeat = true;
            continue outer;//goto label2076
         case 2075:
            control_flow_pc = 2077;
            control_flow_repeat = true;
            continue outer;//goto label2077
         case 2076:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2077:
      }
   }
}

