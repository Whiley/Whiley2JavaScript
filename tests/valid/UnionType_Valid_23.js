function f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$nR$Z3$i0$S$k3$d0kR$F631(r0){//function(UnionType_Valid_23:IntList) -> UnionType_Valid_23:IntList
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int mode,int op}|{int op,real[] rest}
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
            var r3 = new WyJS.Real(1.23);
            var r4 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.Real()));
            var r5 = new WyJS.Record(["op", "rest"], [r2, r4], new WyJS.Type.Record(["op", "rest"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Real())]));
            var r1 = r5.clone();//assign %1 = %5  : {int op,real[] rest}
            var r0 = r1.clone();//assign %0 = %1  : {real|int op,real[] rest}
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(10);
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 221;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Real(1.23);
            var r9 = new WyJS.Real(1.0);
            var r10 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Real()));
            var r11 = new WyJS.Record(["op", "rest"], [r8, r10], new WyJS.Type.Record(["op", "rest"], [new WyJS.Type.Real(), new WyJS.Type.List(new WyJS.Type.Real())]));
            var r0 = r11.clone();//assign %0 = %11  : {real op,real[] rest}
         case 221:
            var r12 = new WyJS.Integer(123);
            var r13 = new WyJS.Integer(123);
            r0.setValue("op", r13);
            var r14 = f$Y9bFXL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$nR$Z3$i0$S$k3$d0kR$F631(r0);//invoke %14 = (%0) UnionType_Valid_23:f : function(UnionType_Valid_23:IntList) -> UnionType_Valid_23:IntList
            var r15 = new WyJS.Integer(123);
            var r16 = new WyJS.Real(1.23);
            var r17 = new WyJS.List([r16], new WyJS.Type.List(new WyJS.Type.Real()));
            var r18 = new WyJS.Record(["op", "rest"], [r15, r17], new WyJS.Type.Record(["op", "rest"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Real())]));
            if(WyJS.equals(r14, r18, true)){
               control_flow_pc = 222;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 222:
            return;
      }
   }
}

