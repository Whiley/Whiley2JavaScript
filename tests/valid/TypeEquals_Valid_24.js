function f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$$C0$J0(r0){//function(TypeEquals_Valid_24:T) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Array(new WyJS.Type.Int()))){
               control_flow_pc = 610;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 611;
            control_flow_repeat = true;
            continue outer;//goto label611
         case 610:
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            return r1;//return %1 : int
            control_flow_pc = 612;
            control_flow_repeat = true;
            continue outer;//goto label612
         case 611:
            return r0;//return %0 : int
         case 612:
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Array([r1, r2, r3, r4], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$$C0$J0(r5);//invoke %0 = (%5) TypeEquals_Valid_24:f : function(TypeEquals_Valid_24:T) -> int
            var r6 = new WyJS.Integer(4);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 613;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 613:
            var r8 = new WyJS.Integer(123);
            var r7 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$m$$C0$J0(r8);//invoke %7 = (%8) TypeEquals_Valid_24:f : function(TypeEquals_Valid_24:T) -> int
            var r9 = new WyJS.Integer(123);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 614;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 614:
            return;
      }
   }
}

