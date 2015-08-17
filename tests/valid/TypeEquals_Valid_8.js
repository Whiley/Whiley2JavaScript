function f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r0){//function(TypeEquals_Valid_8:rlist) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 35;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 36;
            control_flow_repeat = true;
            continue outer;//goto label36
         case 35:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 37;
            control_flow_repeat = true;
            continue outer;//goto label37
         case 36:
            var r2 = false;
            return r2;//return %2 : bool
         case 37:
      }
   }
}

function g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r0){//function(TypeEquals_Valid_8:ilist) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = WyJS.Cast(r0, new WyJS.Type.Union([new WyJS.Type.Real(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r1 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r2);//invoke %1 = (%2) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            return r1;//return %1 : bool
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
            var r1 = new WyJS.Real(1.0);
            var r0 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r1);//invoke %0 = (%1) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r2 = false;
            if(r0 === r2){
               control_flow_pc = 38;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 38:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r5);//invoke %3 = (%5) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r6 = true;
            if(r3 === r6){
               control_flow_pc = 39;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 39:
            var r8 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r7 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r8);//invoke %7 = (%8) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r9 = true;
            if(r7 === r9){
               control_flow_pc = 40;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 40:
            var r11 = new WyJS.Integer(1);
            var r10 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r11);//invoke %10 = (%11) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r12 = false;
            if(r10 === r12){
               control_flow_pc = 41;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 41:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r15);//invoke %13 = (%15) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r16 = true;
            if(r13 === r16){
               control_flow_pc = 42;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 42:
            var r18 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r17 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r18);//invoke %17 = (%18) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r19 = true;
            if(r17 === r19){
               control_flow_pc = 43;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 43:
      }
   }
}

