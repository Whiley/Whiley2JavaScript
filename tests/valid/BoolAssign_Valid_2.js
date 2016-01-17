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
               control_flow_pc = 1156;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1157;
            control_flow_repeat = true;
            continue outer;//goto label1157
         case 1156:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1158;
               control_flow_repeat = true;
               continue outer;
            }
         case 1157:
            var r8 = false;
            control_flow_pc = 1159;
            control_flow_repeat = true;
            continue outer;//goto label1159
         case 1158:
            var r8 = true;
         case 1159:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1160:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 1161;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1162;
            control_flow_repeat = true;
            continue outer;//goto label1162
         case 1161:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 1163;
               control_flow_repeat = true;
               continue outer;
            }
         case 1162:
            var r12 = false;
            control_flow_pc = 1164;
            control_flow_repeat = true;
            continue outer;//goto label1164
         case 1163:
            var r12 = true;
         case 1164:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 1165;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1165:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 1166;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1167;
            control_flow_repeat = true;
            continue outer;//goto label1167
         case 1166:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 1168;
               control_flow_repeat = true;
               continue outer;
            }
         case 1167:
            var r16 = false;
            control_flow_pc = 1169;
            control_flow_repeat = true;
            continue outer;//goto label1169
         case 1168:
            var r16 = true;
         case 1169:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 1170;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1170:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 1171;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1172;
            control_flow_repeat = true;
            continue outer;//goto label1172
         case 1171:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 1173;
               control_flow_repeat = true;
               continue outer;
            }
         case 1172:
            var r20 = false;
            control_flow_pc = 1174;
            control_flow_repeat = true;
            continue outer;//goto label1174
         case 1173:
            var r20 = true;
         case 1174:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 1175;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1175:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 1176;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1177;
            control_flow_repeat = true;
            continue outer;//goto label1177
         case 1176:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1177:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 1178;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1179;
            control_flow_repeat = true;
            continue outer;//goto label1179
         case 1178:
            control_flow_pc = 1180;
            control_flow_repeat = true;
            continue outer;//goto label1180
         case 1179:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1180:
            return;
      }
   }
}

