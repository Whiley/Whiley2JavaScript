function f$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1202;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1203;
            control_flow_repeat = true;
            continue outer;//goto label1203
         case 1202:
            var r4 = true;
         case 1203:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1204;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1205;
            control_flow_repeat = true;
            continue outer;//goto label1205
         case 1204:
            var r6 = new WyJS.Integer(1);
            return r6;//return %6 : int
            control_flow_pc = 1206;
            control_flow_repeat = true;
            continue outer;//goto label1206
         case 1205:
            var r7 = r0.add(r1);//add %7 = %0, %1 : int
            return r7;//return %7 : int
         case 1206:
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
               control_flow_pc = 1207;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1208;
            control_flow_repeat = true;
            continue outer;//goto label1208
         case 1207:
            var r4 = true;
         case 1208:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1209;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            return r6;//return %6 : int
            control_flow_pc = 1210;
            control_flow_repeat = true;
            continue outer;//goto label1210
         case 1209:
            var r7 = new WyJS.Integer(1);
            return r7;//return %7 : int
         case 1210:
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
            var r0 = f$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) BoolAssign_Valid_4:f : function(int,int) -> int
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1211;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1211:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r4 = f$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) BoolAssign_Valid_4:f : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1212;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1212:
            var r9 = new WyJS.Integer(4);
            var r10 = new WyJS.Integer(345);
            var r8 = f$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) BoolAssign_Valid_4:f : function(int,int) -> int
            var r11 = new WyJS.Integer(349);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1213;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1213:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r12 = g$Y9dFXs1Fs2(r13, r14);//invoke %12 = (%13, %14) BoolAssign_Valid_4:g : function(int,int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 1214;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1214:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r16 = g$Y9dFXs1Fs2(r17, r18);//invoke %16 = (%17, %18) BoolAssign_Valid_4:g : function(int,int) -> int
            var r19 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 1215;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1215:
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(345);
            var r20 = g$Y9dFXs1Fs2(r21, r22);//invoke %20 = (%21, %22) BoolAssign_Valid_4:g : function(int,int) -> int
            var r23 = new WyJS.Integer(349);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 1216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1216:
            return;
      }
   }
}

