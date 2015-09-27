function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$lR$o5$n0kO$F4$t0$R$J531(r0){//function(UnionType_Valid_11:msgType) -> UnionType_Valid_11:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int index}|{int[] data,int op}
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = WyJS.ListGen(r3, r4, new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(11);
            var r7 = new WyJS.Record(["data", "op"], [r5, r6], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r2 = r7.clone();//assign %2 = %7  : {int[] data,int op}
            var r0 = r2.clone();//assign %0 = %2  : {int[] data,int op}
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Record(["index"], [r9], new WyJS.Type.Record(["index"], [new WyJS.Type.Int()]));
            var r8 = r10.clone();//assign %8 = %10  : {int index}
            var r1 = r8.clone();//assign %1 = %8  : {int index}
            var r11 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$lR$o5$n0kO$F4$t0$R$J531(r0);//invoke %11 = (%0) UnionType_Valid_11:f : function(UnionType_Valid_11:msgType) -> UnionType_Valid_11:msgType
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = WyJS.ListGen(r12, r13, new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = new WyJS.Integer(11);
            var r16 = new WyJS.Record(["data", "op"], [r14, r15], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            if(WyJS.equals(r11, r16, true)){
               control_flow_pc = 421;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 421:
            var r17 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$lR$o5$n0kO$F4$t0$R$J531(r1);//invoke %17 = (%1) UnionType_Valid_11:f : function(UnionType_Valid_11:msgType) -> UnionType_Valid_11:msgType
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Record(["index"], [r18], new WyJS.Type.Record(["index"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r17, r19, true)){
               control_flow_pc = 422;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 422:
            return;
      }
   }
}

