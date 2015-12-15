function parseTerm$Y9_FP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$qF$J3$s0$R$763y(){//function() -> RecursiveType_Valid_16:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = parseIdentifier$Y9_FP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$qF$J3$s0$R$763y();//invoke %0 = () RecursiveType_Valid_16:parseIdentifier : function() -> RecursiveType_Valid_16:Expr
            return r0;//return %0 : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            return;
      }
   }
}

function parseIdentifier$Y9_FP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$qF$J3$s0$R$763y(){//function() -> RecursiveType_Valid_16:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([new WyJS.Integer(101), new WyJS.Integer(114), new WyJS.Integer(114)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = new WyJS.Record(["err"], [r0], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            return r1;//return %1 : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
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
            var r2 = parseTerm$Y9_FP8s1$H0FO$B5$p0VR$B6$d0VS$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$qF$J3$s0$R$763y();//invoke %2 = () RecursiveType_Valid_16:parseTerm : function() -> RecursiveType_Valid_16:Expr
            var r1 = r2;//assign %1 = %2  : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<{int[] err}|{int num}|{X lhs,int op,X rhs}>
            var r3 = new WyJS.List([new WyJS.Integer(101), new WyJS.Integer(114), new WyJS.Integer(114)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = new WyJS.Record(["err"], [r3], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 159;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 159:
            return;
      }
   }
}

