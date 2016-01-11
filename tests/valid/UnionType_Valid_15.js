function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$pR$o5$n0kO$F4$t0$R$J531(r0){//function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int[] data,int op}|{{int dum}[] data,int op}
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
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["data", "op"], [r6, r7], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r2 = r8.clone();//assign %2 = %8  : {int[] data,int op}
            var r0 = r2.clone();//assign %0 = %2  : {int[] data,int op}
            var r9 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$pR$o5$n0kO$F4$t0$R$J531(r0);//invoke %9 = (%0) UnionType_Valid_15:f : function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Record(["data", "op"], [r13, r14], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            if(WyJS.equals(r9, r15, true)){
               control_flow_pc = 258;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 258:
            var r17 = r0.fieldLoad("data");//fieldload %17 = %0 data : {int[] data,int op}
            var r16 = r17.clone(new WyJS.Type.Int());//assign %16 = %17  : int[]
            var r1 = r16.clone(new WyJS.Type.Int());//assign %1 = %16  : int[]
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r21, true)){
               control_flow_pc = 259;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 259:
            return;
      }
   }
}

