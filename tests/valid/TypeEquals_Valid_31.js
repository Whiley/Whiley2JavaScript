function f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$n$FB4$m0FO$B5$l$VB(r0){//function(TypeEquals_Valid_31:rec12) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
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
            var r3 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Record(["f1", "f2"], [r3, r4], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r2 = r5.clone();//assign %2 = %5  : {int[] f1,int f2}
            var r0 = r2.clone();//assign %0 = %2  : {any f1,int f2}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Record(["f1", "f2"], [r7, r8], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r6 = r9.clone();//assign %6 = %9  : {int f1,int f2}
            var r1 = r6.clone();//assign %1 = %6  : {int f1,int f2}
            var r10 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$n$FB4$m0FO$B5$l$VB(r0);//invoke %10 = (%0) TypeEquals_Valid_31:f : function(TypeEquals_Valid_31:rec12) -> int
            var r11 = new WyJS.Integer(1);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 588;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 588:
            var r12 = f$Z9bFaA$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$n$FB4$m0FO$B5$l$VB(r1);//invoke %12 = (%1) TypeEquals_Valid_31:f : function(TypeEquals_Valid_31:rec12) -> int
            var r13 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 589;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 589:
            return;
      }
   }
}

