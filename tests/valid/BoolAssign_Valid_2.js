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
               control_flow_pc = 1139;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1140;
            control_flow_repeat = true;
            continue outer;//goto label1140
         case 1139:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1141;
               control_flow_repeat = true;
               continue outer;
            }
         case 1140:
            var r8 = false;
            control_flow_pc = 1142;
            control_flow_repeat = true;
            continue outer;//goto label1142
         case 1141:
            var r8 = true;
         case 1142:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1143;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1143:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 1144;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1145;
            control_flow_repeat = true;
            continue outer;//goto label1145
         case 1144:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 1146;
               control_flow_repeat = true;
               continue outer;
            }
         case 1145:
            var r12 = false;
            control_flow_pc = 1147;
            control_flow_repeat = true;
            continue outer;//goto label1147
         case 1146:
            var r12 = true;
         case 1147:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 1148;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1148:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 1149;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1150;
            control_flow_repeat = true;
            continue outer;//goto label1150
         case 1149:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 1151;
               control_flow_repeat = true;
               continue outer;
            }
         case 1150:
            var r16 = false;
            control_flow_pc = 1152;
            control_flow_repeat = true;
            continue outer;//goto label1152
         case 1151:
            var r16 = true;
         case 1152:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 1153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1153:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 1154;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1155;
            control_flow_repeat = true;
            continue outer;//goto label1155
         case 1154:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 1156;
               control_flow_repeat = true;
               continue outer;
            }
         case 1155:
            var r20 = false;
            control_flow_pc = 1157;
            control_flow_repeat = true;
            continue outer;//goto label1157
         case 1156:
            var r20 = true;
         case 1157:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 1158;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1158:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 1159;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1160;
            control_flow_repeat = true;
            continue outer;//goto label1160
         case 1159:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1160:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 1161;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1162;
            control_flow_repeat = true;
            continue outer;//goto label1162
         case 1161:
            control_flow_pc = 1163;
            control_flow_repeat = true;
            continue outer;//goto label1163
         case 1162:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1163:
            return;
      }
   }
}

