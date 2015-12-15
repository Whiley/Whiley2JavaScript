function f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$F20$K$J6$k0VBFc_F9$F4$p0$R$k5$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$oF$F4$p0$R$32(r0){//function(TupleType_Valid_4:Tup1) -> TupleType_Valid_4:Tup2
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.cast(new WyJS.Type.Tuple([new WyJS.Type.Real(), new WyJS.Type.Real()]), r0);
            return r1;//return %1 : (real,real)
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
            var r5 = new WyJS.Tuple([r3, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$F20$K$J6$k0VBFc_F9$F4$p0$R$k5$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$oF$F4$p0$R$32(r5);//invoke %2 = (%5) TupleType_Valid_4:f : function(TupleType_Valid_4:Tup1) -> TupleType_Valid_4:Tup2
            var r1 = r2;//assign %1 = %2  : (real,real)
            var r0 = r1;//assign %0 = %1  : (real,real)
            var r6 = new WyJS.Real(1.0);
            var r7 = new WyJS.Real(2.0);
            var r8 = new WyJS.Tuple([r6, r7], new WyJS.Type.Tuple([new WyJS.Type.Real(), new WyJS.Type.Real()]));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 586;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 586:
            return;
      }
   }
}

