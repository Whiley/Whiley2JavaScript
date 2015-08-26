function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$nR$o5$n0kO$F4$t0$R$J531(r0){//function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int index}|{[int] data,int op}
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = new WyJS.Integer(11);
            var r5 = new WyJS.Record(["data", "op"], [r3, r4], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            var r2 = r5;//assign %2 = %5  : {[void] data,int op}
            var r0 = r2;//assign %0 = %2  : {[int] data,int op}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["index"], [r7], new WyJS.Type.Record(["index"], [new WyJS.Type.Int()]));
            var r6 = r8;//assign %6 = %8  : {int index}
            var r1 = r6;//assign %1 = %6  : {int index}
            var r9 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$nR$o5$n0kO$F4$t0$R$J531(r0);//invoke %9 = (%0) UnionType_Valid_13:f : function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
            var r10 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r11 = new WyJS.Integer(11);
            var r12 = new WyJS.Record(["data", "op"], [r10, r11], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 399;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 399:
            var r13 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$nR$o5$n0kO$F4$t0$R$J531(r1);//invoke %13 = (%1) UnionType_Valid_13:f : function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Record(["index"], [r14], new WyJS.Type.Record(["index"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 400;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 400:
            return;
      }
   }
}

