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
               control_flow_pc = 1169;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1170;
            control_flow_repeat = true;
            continue outer;//goto label1170
         case 1169:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1171;
               control_flow_repeat = true;
               continue outer;
            }
         case 1170:
            var r8 = false;
            control_flow_pc = 1172;
            control_flow_repeat = true;
            continue outer;//goto label1172
         case 1171:
            var r8 = true;
         case 1172:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1173;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1173:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 1174;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1175;
            control_flow_repeat = true;
            continue outer;//goto label1175
         case 1174:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 1176;
               control_flow_repeat = true;
               continue outer;
            }
         case 1175:
            var r12 = false;
            control_flow_pc = 1177;
            control_flow_repeat = true;
            continue outer;//goto label1177
         case 1176:
            var r12 = true;
         case 1177:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 1178;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1178:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 1179;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1180;
            control_flow_repeat = true;
            continue outer;//goto label1180
         case 1179:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 1181;
               control_flow_repeat = true;
               continue outer;
            }
         case 1180:
            var r16 = false;
            control_flow_pc = 1182;
            control_flow_repeat = true;
            continue outer;//goto label1182
         case 1181:
            var r16 = true;
         case 1182:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 1183;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1183:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 1184;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1185;
            control_flow_repeat = true;
            continue outer;//goto label1185
         case 1184:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 1186;
               control_flow_repeat = true;
               continue outer;
            }
         case 1185:
            var r20 = false;
            control_flow_pc = 1187;
            control_flow_repeat = true;
            continue outer;//goto label1187
         case 1186:
            var r20 = true;
         case 1187:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 1188;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1188:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 1189;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1190;
            control_flow_repeat = true;
            continue outer;//goto label1190
         case 1189:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1190:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 1191;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1192;
            control_flow_repeat = true;
            continue outer;//goto label1192
         case 1191:
            control_flow_pc = 1193;
            control_flow_repeat = true;
            continue outer;//goto label1193
         case 1192:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1193:
            return;
      }
   }
}

