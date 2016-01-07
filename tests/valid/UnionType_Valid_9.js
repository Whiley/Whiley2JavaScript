function f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Zn0FQ$B6$b0$K$Z6$k0FO(r0){//function(UnionType_Valid_9:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r7 = f$Z9bFa7$WL1d$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$Zn0FQ$B6$b0$K$Z6$k0FO(r0);//invoke %7 = (%0) UnionType_Valid_9:f : function(UnionType_Valid_9:msgType) -> any
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = WyJS.ListGen(r8, r9, new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.Integer(11);
            var r12 = new WyJS.Record(["data", "op"], [r10, r11], new WyJS.Type.Record(["data", "op"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            if(WyJS.equals(r7, r12, true)){
               control_flow_pc = 1022;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1022:
            return;
      }
   }
}

