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
               control_flow_pc = 2134;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2135;
            control_flow_repeat = true;
            continue outer;//goto label2135
         case 2134:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 2136;
               control_flow_repeat = true;
               continue outer;
            }
         case 2135:
            var r8 = false;
            control_flow_pc = 2137;
            control_flow_repeat = true;
            continue outer;//goto label2137
         case 2136:
            var r8 = true;
         case 2137:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 2138;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2138:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 2139;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2140;
            control_flow_repeat = true;
            continue outer;//goto label2140
         case 2139:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 2141;
               control_flow_repeat = true;
               continue outer;
            }
         case 2140:
            var r12 = false;
            control_flow_pc = 2142;
            control_flow_repeat = true;
            continue outer;//goto label2142
         case 2141:
            var r12 = true;
         case 2142:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 2143;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2143:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 2144;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2145;
            control_flow_repeat = true;
            continue outer;//goto label2145
         case 2144:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 2146;
               control_flow_repeat = true;
               continue outer;
            }
         case 2145:
            var r16 = false;
            control_flow_pc = 2147;
            control_flow_repeat = true;
            continue outer;//goto label2147
         case 2146:
            var r16 = true;
         case 2147:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 2148;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2148:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 2149;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2150;
            control_flow_repeat = true;
            continue outer;//goto label2150
         case 2149:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 2151;
               control_flow_repeat = true;
               continue outer;
            }
         case 2150:
            var r20 = false;
            control_flow_pc = 2152;
            control_flow_repeat = true;
            continue outer;//goto label2152
         case 2151:
            var r20 = true;
         case 2152:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 2153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2153:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 2154;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2155;
            control_flow_repeat = true;
            continue outer;//goto label2155
         case 2154:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2155:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 2156;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2157;
            control_flow_repeat = true;
            continue outer;//goto label2157
         case 2156:
            control_flow_pc = 2158;
            control_flow_repeat = true;
            continue outer;//goto label2158
         case 2157:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2158:
            return;
      }
   }
}

