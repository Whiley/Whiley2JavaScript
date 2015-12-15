function f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$VC6$d0VQ$F6$g0FP$B6$o0(r0){//function(TypeEquals_Valid_46:intlist) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 548;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 549;
            control_flow_repeat = true;
            continue outer;//goto label549
         case 548:
            return r0;//return %0 : int
         case 549:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$VC6$d0VQ$F6$g0FP$B6$o0(r6);//invoke %2 = (%6) TypeEquals_Valid_46:f : function(TypeEquals_Valid_46:intlist) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 550;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 550:
            var r9 = new WyJS.Integer(123);
            var r8 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$VC6$d0VQ$F6$g0FP$B6$o0(r9);//invoke %8 = (%9) TypeEquals_Valid_46:f : function(TypeEquals_Valid_46:intlist) -> int
            var r0 = r8;//assign %0 = %8  : int
            var r10 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 551;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 551:
            return;
      }
   }
}

