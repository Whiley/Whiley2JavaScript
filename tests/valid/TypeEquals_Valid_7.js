function f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$rR$Z5$i0$S$76$_0FN$k5(r0){//function(TypeEquals_Valid_7:intreal) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 29;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 30;
            control_flow_repeat = true;
            continue outer;//goto label30
         case 29:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 31;
            control_flow_repeat = true;
            continue outer;//goto label31
         case 30:
            var r2 = false;
            return r2;//return %2 : bool
         case 31:
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r0 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$rR$Z5$i0$S$76$_0FN$k5(r1);//invoke %0 = (%1) TypeEquals_Valid_7:f : function(TypeEquals_Valid_7:intreal) -> bool
            var r2 = true;
            if(r0 === r2){
               control_flow_pc = 32;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 32:
            var r4 = new WyJS.Real(1.134);
            var r3 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$rR$Z5$i0$S$76$_0FN$k5(r4);//invoke %3 = (%4) TypeEquals_Valid_7:f : function(TypeEquals_Valid_7:intreal) -> bool
            var r5 = false;
            if(r3 === r5){
               control_flow_pc = 33;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 33:
            var r7 = new WyJS.Real(1.0);
            var r6 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$rR$Z5$i0$S$76$_0FN$k5(r7);//invoke %6 = (%7) TypeEquals_Valid_7:f : function(TypeEquals_Valid_7:intreal) -> bool
            var r8 = false;
            if(r6 === r8){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 34:
            return;
      }
   }
}

