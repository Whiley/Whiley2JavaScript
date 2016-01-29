function f$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1093;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1094;
            control_flow_repeat = true;
            continue outer;//goto label1094
         case 1093:
            var r4 = true;
         case 1094:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1095;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1096;
            control_flow_repeat = true;
            continue outer;//goto label1096
         case 1095:
            var r6 = new WyJS.Integer(1);
            return r6;//return %6 : int
            control_flow_pc = 1097;
            control_flow_repeat = true;
            continue outer;//goto label1097
         case 1096:
            var r7 = r0.add(r1);//add %7 = %0, %1 : int
            return r7;//return %7 : int
         case 1097:
            return;
      }
   }
}

function g$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1101;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1102;
            control_flow_repeat = true;
            continue outer;//goto label1102
         case 1101:
            var r4 = true;
         case 1102:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1103;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            return r6;//return %6 : int
            control_flow_pc = 1104;
            control_flow_repeat = true;
            continue outer;//goto label1104
         case 1103:
            var r7 = new WyJS.Integer(1);
            return r7;//return %7 : int
         case 1104:
            return;
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(1);
            var r0 = f$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) BoolAssign_Valid_3:f : function(int,int) -> int
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1105;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1105:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r4 = f$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) BoolAssign_Valid_3:f : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1106;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1106:
            var r9 = new WyJS.Integer(4);
            var r10 = new WyJS.Integer(345);
            var r8 = f$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) BoolAssign_Valid_3:f : function(int,int) -> int
            var r11 = new WyJS.Integer(349);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1107;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1107:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r12 = g$Y9dFXs1Fs2(r13, r14);//invoke %12 = (%13, %14) BoolAssign_Valid_3:g : function(int,int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 1108;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1108:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r16 = g$Y9dFXs1Fs2(r17, r18);//invoke %16 = (%17, %18) BoolAssign_Valid_3:g : function(int,int) -> int
            var r19 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 1109;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1109:
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(345);
            var r20 = g$Y9dFXs1Fs2(r21, r22);//invoke %20 = (%21, %22) BoolAssign_Valid_3:g : function(int,int) -> int
            var r23 = new WyJS.Integer(349);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 1110;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1110:
            return;
      }
   }
}

