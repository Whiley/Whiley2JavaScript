function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$kV0$X0FT$F6$_0kF$w5$Z0FOFs2(r0){//function(UnionType_Valid_20:byteCode) -> UnionType_Valid_20:byteCode
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int index,int op}|{int offset,int op}
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["index", "op"], [r2, r3], new WyJS.Type.Record(["index", "op"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4.clone();//assign %1 = %4  : {int index,int op}
            var r0 = r1.clone();//assign %0 = %1  : {int index,int op}
            var r5 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$kV0$X0FT$F6$_0kF$w5$Z0FOFs2(r0);//invoke %5 = (%0) UnionType_Valid_20:f : function(UnionType_Valid_20:byteCode) -> UnionType_Valid_20:byteCode
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Record(["index", "op"], [r6, r7], new WyJS.Type.Record(["index", "op"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 379;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 379:
            return;
      }
   }
}

