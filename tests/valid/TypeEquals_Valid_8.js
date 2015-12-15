function f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r0){//function(TypeEquals_Valid_8:rlist) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 599;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 600;
            control_flow_repeat = true;
            continue outer;//goto label600
         case 599:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 601;
            control_flow_repeat = true;
            continue outer;//goto label601
         case 600:
            var r2 = false;
            return r2;//return %2 : bool
         case 601:
            return;
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
            var r2 = WyJS.cast(new WyJS.Type.Union([new WyJS.Type.Real(), new WyJS.Type.List(new WyJS.Type.Int())]), r0);
            var r1 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r2);//invoke %1 = (%2) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            return r1;//return %1 : bool
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
            var r1 = new WyJS.Real(1.0);
            var r0 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r1);//invoke %0 = (%1) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r2 = false;
            if(r0 === r2){
               control_flow_pc = 602;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 602:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r5);//invoke %3 = (%5) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r6 = true;
            if(r3 === r6){
               control_flow_pc = 603;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 603:
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = WyJS.ListGen(r8, r9, new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$76$g0FP$B6$o0(r10);//invoke %7 = (%10) TypeEquals_Valid_8:f : function(TypeEquals_Valid_8:rlist) -> bool
            var r11 = true;
            if(r7 === r11){
               control_flow_pc = 604;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 604:
            var r13 = new WyJS.Integer(1);
            var r12 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r13);//invoke %12 = (%13) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r14 = false;
            if(r12 === r14){
               control_flow_pc = 605;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 605:
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.List([r16], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r17);//invoke %15 = (%17) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r18 = true;
            if(r15 === r18){
               control_flow_pc = 606;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 606:
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = WyJS.ListGen(r20, r21, new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = g$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$sJ$Z5$g0FP$B6$o0(r22);//invoke %19 = (%22) TypeEquals_Valid_8:g : function(TypeEquals_Valid_8:ilist) -> bool
            var r23 = true;
            if(r19 === r23){
               control_flow_pc = 607;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 607:
            return;
      }
   }
}

