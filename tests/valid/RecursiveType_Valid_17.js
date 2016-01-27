function parse$_9bFaL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$l$kC3$40$T$$6$m00D5ZAw2(r0){//function(int[]) -> RecursiveType_Valid_17:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Record(["input", "pos"], [r0, r4], new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.Array(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r3 = parseAddSubExpr$_9bFaE9oF1$9I$ND$c21h3R0$d$cB$52Vu$FD$a2Vo$kD$92$e$7E$V2Vm$sA$g1Vk$VC$H2$m$sA$X0VQ9$a1$u$7B$c2VmP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$rF$J3$s0$R$7rE(r5);//invoke %3 = (%5) RecursiveType_Valid_17:parseAddSubExpr : function(RecursiveType_Valid_17:State) -> {RecursiveType_Valid_17:Expr e,RecursiveType_Valid_17:State st}
            var r2 = r3.clone();//assign %2 = %3  : {X<{int[] err}|{int num}|{X lhs,int op,X rhs}> e,{int[] input,int pos} st}
            var r1 = r2.clone();//assign %1 = %2  : {X<{int[] err}|{int num}|{X lhs,int op,X rhs}> e,{int[] input,int pos} st}
            var r6 = r1.fieldLoad("e");//fieldload %6 = %1 e : {X<{int[] err}|{int num}|{X lhs,int op,X rhs}> e,{int[] input,int pos} st}
            return r6;//return %6 : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            return;
      }
   }
}

function parseAddSubExpr$_9bFaE9oF1$9I$ND$c21h3R0$d$cB$52Vu$FD$a2Vo$kD$92$e$7E$V2Vm$sA$g1Vk$VC$H2$m$sA$X0VQ9$a1$u$7B$c2VmP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$rF$J3$s0$R$7rE(r0){//function(RecursiveType_Valid_17:State) -> {RecursiveType_Valid_17:Expr e,RecursiveType_Valid_17:State st}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Record(["num"], [r1], new WyJS.Type.Record(["num"], [new WyJS.Type.Int()]));
            var r3 = new WyJS.Record(["e", "st"], [r2, r0], new WyJS.Type.Record(["e", "st"], [new WyJS.Type.Record(["num"], [new WyJS.Type.Int()]), new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.Array(new WyJS.Type.Int()), new WyJS.Type.Int()])]));
            return r3;//return %3 : {X<{int[] err}|{int num}|{X lhs,int op,X rhs}> e,{int[] input,int pos} st}
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
            var r3 = new WyJS.Array([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = parse$_9bFaL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$l$kC3$40$T$$6$m00D5ZAw2(r3);//invoke %2 = (%3) RecursiveType_Valid_17:parse : function(int[]) -> RecursiveType_Valid_17:Expr
            var r1 = r2;//assign %1 = %2  : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Record(["num"], [r4], new WyJS.Type.Record(["num"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 214;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 214:
            return;
      }
   }
}

