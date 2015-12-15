function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$kR$o5$n0kO$F4$t0$R$J531(r0){//function(UnionType_Valid_10:msgType) -> UnionType_Valid_10:msgType
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
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = WyJS.ListGen(r2, r3, new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = new WyJS.Integer(11);
            var r6 = new WyJS.Record(["data", "op"], [r4, r5], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r1 = r6.clone();//assign %1 = %6  : {int[] data,int op}
            var r0 = r1.clone();//assign %0 = %1  : {int[] data,int op}
            var r7 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$kR$o5$n0kO$F4$t0$R$J531(r0);//invoke %7 = (%0) UnionType_Valid_10:f : function(UnionType_Valid_10:msgType) -> UnionType_Valid_10:msgType
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = WyJS.ListGen(r8, r9, new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.Integer(11);
            var r12 = new WyJS.Record(["data", "op"], [r10, r11], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            if(WyJS.equals(r7, r12, true)){
               control_flow_pc = 463;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 463:
            return;
      }
   }
}

