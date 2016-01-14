function f$Z9bFaA$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$mF$J5$s0$R$76(r0){//function(TypeEquals_Valid_2:expr) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 269;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 270;
            control_flow_repeat = true;
            continue outer;//goto label270
         case 269:
            var r1 = r0.fieldLoad("err");//fieldload %1 = %0 err : {int[] err}
            var r2 = r1.length();//lengthof %2 = %1 : int[]
            return r2;//return %2 : int
            control_flow_pc = 271;
            control_flow_repeat = true;
            continue outer;//goto label271
         case 270:
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            return r4;//return %4 : int
         case 271:
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
            var r3 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = new WyJS.Record(["err"], [r3], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r2 = f$Z9bFaA$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$mF$J5$s0$R$76(r4);//invoke %2 = (%4) TypeEquals_Valid_2:f : function(TypeEquals_Valid_2:expr) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(11);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 272;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 272:
            var r7 = new WyJS.List([new WyJS.Integer(71), new WyJS.Integer(111), new WyJS.Integer(116), new WyJS.Integer(99), new WyJS.Integer(104), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = new WyJS.Record(["err"], [r7], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Record(["lhs", "op"], [r8, r9], new WyJS.Type.Record(["lhs", "op"], [new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]), new WyJS.Type.Int()]));
            var r6 = f$Z9bFaA$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$mF$J5$s0$R$76(r10);//invoke %6 = (%10) TypeEquals_Valid_2:f : function(TypeEquals_Valid_2:expr) -> int
            var r0 = r6;//assign %0 = %6  : int
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 273;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 273:
            return;
      }
   }
}

