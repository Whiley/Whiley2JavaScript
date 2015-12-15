function f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$FB3$_0$T$$6$m0(r0){//function(TypeEquals_Valid_21:expr) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 125;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 126;
            control_flow_repeat = true;
            continue outer;//goto label126
         case 125:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 127;
            control_flow_repeat = true;
            continue outer;//goto label127
         case 126:
            var r2 = false;
            return r2;//return %2 : bool
         case 127:
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
            var r2 = true;
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : bool|int[]
            var r3 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$FB3$_0$T$$6$m0(r0);//invoke %3 = (%0) TypeEquals_Valid_21:f : function(TypeEquals_Valid_21:expr) -> bool
            var r4 = false;
            if(r3 === r4){
               control_flow_pc = 128;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 128:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = r9.clone(new WyJS.Type.Int());//assign %0 = %9  : int[]
            var r10 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$FB3$_0$T$$6$m0(r0);//invoke %10 = (%0) TypeEquals_Valid_21:f : function(TypeEquals_Valid_21:expr) -> bool
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 129;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 129:
            return;
      }
   }
}

