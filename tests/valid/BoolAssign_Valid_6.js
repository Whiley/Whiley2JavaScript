function f$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = true;
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1129;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = false;
            var r2 = r5;//assign %2 = %5  : bool
         case 1129:
            var r6 = true;
            if(r2 === r6){
               control_flow_pc = 1130;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.add(r1);//add %7 = %0, %1 : int
            return r7;//return %7 : int
            control_flow_pc = 1131;
            control_flow_repeat = true;
            continue outer;//goto label1131
         case 1130:
            var r8 = new WyJS.Integer(123);
            return r8;//return %8 : int
         case 1131:
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
            var r0 = f$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) BoolAssign_Valid_6:f : function(int,int) -> int
            var r3 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1132;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1132:
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(1);
            var r4 = f$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) BoolAssign_Valid_6:f : function(int,int) -> int
            var r7 = new WyJS.Integer(123);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1133;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1133:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r8 = f$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) BoolAssign_Valid_6:f : function(int,int) -> int
            var r11 = new WyJS.Integer(3);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 1134;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1134:
            return;
      }
   }
}

