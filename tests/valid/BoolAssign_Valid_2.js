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
               control_flow_pc = 1065;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1066;
            control_flow_repeat = true;
            continue outer;//goto label1066
         case 1065:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1067;
               control_flow_repeat = true;
               continue outer;
            }
         case 1066:
            var r8 = false;
            control_flow_pc = 1068;
            control_flow_repeat = true;
            continue outer;//goto label1068
         case 1067:
            var r8 = true;
         case 1068:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1069;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1069:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 1070;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1071;
            control_flow_repeat = true;
            continue outer;//goto label1071
         case 1070:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 1072;
               control_flow_repeat = true;
               continue outer;
            }
         case 1071:
            var r12 = false;
            control_flow_pc = 1073;
            control_flow_repeat = true;
            continue outer;//goto label1073
         case 1072:
            var r12 = true;
         case 1073:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 1074;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1074:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 1075;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1076;
            control_flow_repeat = true;
            continue outer;//goto label1076
         case 1075:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 1077;
               control_flow_repeat = true;
               continue outer;
            }
         case 1076:
            var r16 = false;
            control_flow_pc = 1078;
            control_flow_repeat = true;
            continue outer;//goto label1078
         case 1077:
            var r16 = true;
         case 1078:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 1079;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1079:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 1080;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1081;
            control_flow_repeat = true;
            continue outer;//goto label1081
         case 1080:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 1082;
               control_flow_repeat = true;
               continue outer;
            }
         case 1081:
            var r20 = false;
            control_flow_pc = 1083;
            control_flow_repeat = true;
            continue outer;//goto label1083
         case 1082:
            var r20 = true;
         case 1083:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 1084;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1084:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 1085;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1086;
            control_flow_repeat = true;
            continue outer;//goto label1086
         case 1085:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1086:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 1087;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1088;
            control_flow_repeat = true;
            continue outer;//goto label1088
         case 1087:
            control_flow_pc = 1089;
            control_flow_repeat = true;
            continue outer;//goto label1089
         case 1088:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1089:
            return;
      }
   }
}

