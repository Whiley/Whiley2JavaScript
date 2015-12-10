function f$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1007;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1008;
            control_flow_repeat = true;
            continue outer;//goto label1008
         case 1007:
            var r4 = true;
         case 1008:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1009;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1010;
            control_flow_repeat = true;
            continue outer;//goto label1010
         case 1009:
            var r6 = new WyJS.Integer(1);
            return r6;//return %6 : int
            control_flow_pc = 1011;
            control_flow_repeat = true;
            continue outer;//goto label1011
         case 1010:
            var r7 = r0.add(r1);//add %7 = %0, %1 : int
            return r7;//return %7 : int
         case 1011:
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
               control_flow_pc = 1015;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;
            control_flow_pc = 1016;
            control_flow_repeat = true;
            continue outer;//goto label1016
         case 1015:
            var r4 = true;
         case 1016:
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            var r5 = true;
            if(r2 === r5){
               control_flow_pc = 1017;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            return r6;//return %6 : int
            control_flow_pc = 1018;
            control_flow_repeat = true;
            continue outer;//goto label1018
         case 1017:
            var r7 = new WyJS.Integer(1);
            return r7;//return %7 : int
         case 1018:
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
               control_flow_pc = 1019;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1019:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r4 = f$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) BoolAssign_Valid_3:f : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1020;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1020:
            var r9 = new WyJS.Integer(4);
            var r10 = new WyJS.Integer(345);
            var r8 = f$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) BoolAssign_Valid_3:f : function(int,int) -> int
            var r11 = new WyJS.Integer(349);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1021;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1021:
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r12 = g$Y9dFXs1Fs2(r13, r14);//invoke %12 = (%13, %14) BoolAssign_Valid_3:g : function(int,int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 1022;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1022:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r16 = g$Y9dFXs1Fs2(r17, r18);//invoke %16 = (%17, %18) BoolAssign_Valid_3:g : function(int,int) -> int
            var r19 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 1023;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1023:
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(345);
            var r20 = g$Y9dFXs1Fs2(r21, r22);//invoke %20 = (%21, %22) BoolAssign_Valid_3:g : function(int,int) -> int
            var r23 = new WyJS.Integer(349);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 1024;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1024:
            return;
      }
   }
}

