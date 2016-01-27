function f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Rn0FQ$B6$b0$K$Z6$k0FO(r0){//function(UnionType_Valid_7:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op,int[] payload}|{int header,int op,int[] rest}
            return r1;//return %1 : any
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Array([r2, r3, r4], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = new WyJS.Record(["op", "payload"], [r1, r5], new WyJS.Type.Record(["op", "payload"], [new WyJS.Type.Int(), new WyJS.Type.Array(new WyJS.Type.Int())]));
            var r0 = f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Rn0FQ$B6$b0$K$Z6$k0FO(r6);//invoke %0 = (%6) UnionType_Valid_7:f : function(UnionType_Valid_7:msgType) -> any
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1068;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1068:
            return;
      }
   }
}

