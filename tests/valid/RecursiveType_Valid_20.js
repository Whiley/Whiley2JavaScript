function f$Z9bFaL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$$B3$_0$T$$6$m0WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$$B6$k0kQ$B6$40$T$$6$m0(r0){//function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0;//assign %2 = %0  : X<int|{X lhs,X rhs}>
            var r1 = r2;//assign %1 = %2  : X<int|{X lhs,X rhs}>
            return r1;//return %1 : X<int|{X lhs,X rhs}>
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
            var r5 = new WyJS.Record(["lhs", "rhs"], [r3, r4], new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Record(["lhs", "rhs"], [r5, r6], new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int()]));
            var r2 = f$Z9bFaL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$$B3$_0$T$$6$m0WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$$B6$k0kQ$B6$40$T$$6$m0(r7);//invoke %2 = (%7) RecursiveType_Valid_20:f : function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
            var r1 = r2;//assign %1 = %2  : X<int|{X lhs,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<int|{X lhs,X rhs}>
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Record(["lhs", "rhs"], [r8, r9], new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Record(["lhs", "rhs"], [r10, r11], new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Record(["lhs", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 249;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 249:
            return;
      }
   }
}

