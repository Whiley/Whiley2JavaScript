function f$_9dF5X1Fs1N3y2(r0, r1){//function(int,real) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = WyJS.cast(new WyJS.Type.Real(), r0);
            if(WyJS.equals(r2, r1, false)){
               control_flow_pc = 1059;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = true;
            return r3;//return %3 : bool
            control_flow_pc = 1060;
            control_flow_repeat = true;
            continue outer;//goto label1060
         case 1059:
            var r4 = false;
            return r4;//return %4 : bool
         case 1060:
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
            var r2 = new WyJS.Real(4.0);
            var r0 = f$_9dF5X1Fs1N3y2(r1, r2);//invoke %0 = (%1, %2) IntEquals_Valid_1:f : function(int,real) -> bool
            var r3 = false;
            if(r0 === r3){
               control_flow_pc = 1061;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1061:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Real(4.2);
            var r4 = f$_9dF5X1Fs1N3y2(r5, r6);//invoke %4 = (%5, %6) IntEquals_Valid_1:f : function(int,real) -> bool
            var r7 = false;
            if(r4 === r7){
               control_flow_pc = 1062;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1062:
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Real(0.0);
            var r8 = f$_9dF5X1Fs1N3y2(r9, r10);//invoke %8 = (%9, %10) IntEquals_Valid_1:f : function(int,real) -> bool
            var r11 = true;
            if(r8 === r11){
               control_flow_pc = 1063;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1063:
            return;
      }
   }
}

