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
               control_flow_pc = 2092;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2093;
            control_flow_repeat = true;
            continue outer;//goto label2093
         case 2092:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 2094;
               control_flow_repeat = true;
               continue outer;
            }
         case 2093:
            var r8 = false;
            control_flow_pc = 2095;
            control_flow_repeat = true;
            continue outer;//goto label2095
         case 2094:
            var r8 = true;
         case 2095:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 2096;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2096:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 2097;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2098;
            control_flow_repeat = true;
            continue outer;//goto label2098
         case 2097:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 2099;
               control_flow_repeat = true;
               continue outer;
            }
         case 2098:
            var r12 = false;
            control_flow_pc = 2100;
            control_flow_repeat = true;
            continue outer;//goto label2100
         case 2099:
            var r12 = true;
         case 2100:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 2101;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2101:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 2102;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2103;
            control_flow_repeat = true;
            continue outer;//goto label2103
         case 2102:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 2104;
               control_flow_repeat = true;
               continue outer;
            }
         case 2103:
            var r16 = false;
            control_flow_pc = 2105;
            control_flow_repeat = true;
            continue outer;//goto label2105
         case 2104:
            var r16 = true;
         case 2105:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 2106;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2106:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 2107;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2108;
            control_flow_repeat = true;
            continue outer;//goto label2108
         case 2107:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 2109;
               control_flow_repeat = true;
               continue outer;
            }
         case 2108:
            var r20 = false;
            control_flow_pc = 2110;
            control_flow_repeat = true;
            continue outer;//goto label2110
         case 2109:
            var r20 = true;
         case 2110:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 2111;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2111:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 2112;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2113;
            control_flow_repeat = true;
            continue outer;//goto label2113
         case 2112:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2113:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 2114;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2115;
            control_flow_repeat = true;
            continue outer;//goto label2115
         case 2114:
            control_flow_pc = 2116;
            control_flow_repeat = true;
            continue outer;//goto label2116
         case 2115:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2116:
            return;
      }
   }
}

