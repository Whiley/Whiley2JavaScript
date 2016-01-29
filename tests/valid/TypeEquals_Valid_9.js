function f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$tF$J5$s0$R$76(r0){//function(TypeEquals_Valid_9:expr) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Array(new WyJS.Type.Int()))){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 35;
            control_flow_repeat = true;
            continue outer;//goto label35
         case 34:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 36;
            control_flow_repeat = true;
            continue outer;//goto label36
         case 35:
            var r2 = false;
            return r2;//return %2 : bool
         case 36:
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
            var r2 = new WyJS.Integer(1);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int|int[]
            var r3 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$tF$J5$s0$R$76(r0);//invoke %3 = (%0) TypeEquals_Valid_9:f : function(TypeEquals_Valid_9:expr) -> bool
            var r4 = false;
            if(r3 === r4){
               control_flow_pc = 37;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 37:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.Array([r5, r6, r7, r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = r9.clone(new WyJS.Type.Int());//assign %0 = %9  : int[]
            var r10 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$tF$J5$s0$R$76(r0);//invoke %10 = (%0) TypeEquals_Valid_9:f : function(TypeEquals_Valid_9:expr) -> bool
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 38;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 38:
            return;
      }
   }
}

