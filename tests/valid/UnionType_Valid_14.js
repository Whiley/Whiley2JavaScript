function f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$oF$J3$s0$R$76(r0){//function(UnionType_Valid_14:Expr) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 250;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 251;
            control_flow_repeat = true;
            continue outer;//goto label251
         case 250:
            return r0;//return %0 : int
            control_flow_pc = 252;
            control_flow_repeat = true;
            continue outer;//goto label252
         case 251:
            if(WyJS.is(r0, new WyJS.Type.Array(new WyJS.Type.Int()))){
               control_flow_pc = 253;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 254;
            control_flow_repeat = true;
            continue outer;//goto label254
         case 253:
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            return r1;//return %1 : int
            control_flow_pc = 252;
            control_flow_repeat = true;
            continue outer;//goto label252
         case 254:
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
         case 252:
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
            var r0 = f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$oF$J3$s0$R$76(r1);//invoke %0 = (%1) UnionType_Valid_14:f : function(UnionType_Valid_14:Expr) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 255;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 255:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Array([r4, r5, r6], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r3 = f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$oF$J3$s0$R$76(r7);//invoke %3 = (%7) UnionType_Valid_14:f : function(UnionType_Valid_14:Expr) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r3, r8, true)){
               control_flow_pc = 256;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 256:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Record(["lhs", "op", "rhs"], [r10, r11, r12], new WyJS.Type.Record(["lhs", "op", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r9 = f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$oF$J3$s0$R$76(r13);//invoke %9 = (%13) UnionType_Valid_14:f : function(UnionType_Valid_14:Expr) -> int
            var r14 = new WyJS.Integer(1);
            if(WyJS.equals(r9, r14, true)){
               control_flow_pc = 257;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 257:
            return;
      }
   }
}

