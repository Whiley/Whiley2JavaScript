function f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$sN$F6$p0$R$$6$_0VR(r0){//function(UnionType_Valid_18:tupper) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int|int[] il,int op}
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["il", "op"], [r2, r3], new WyJS.Type.Record(["il", "op"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4.clone();//assign %1 = %4  : {int il,int op}
            var r0 = r1.clone();//assign %0 = %1  : {int|int[] il,int op}
            var r5 = f$Z9bFaA$WL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$32$sN$F6$p0$R$$6$_0VR(r0);//invoke %5 = (%0) UnionType_Valid_18:f : function(UnionType_Valid_18:tupper) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 217;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 217:
            return;
      }
   }
}

