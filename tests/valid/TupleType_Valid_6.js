function f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$N20FO$F6$p0$RFs1(r0){//function(int) -> TupleType_Valid_6:etup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 332;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Tuple([r2, r3], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r4;//return %4 : (int,int)|(real,real)
            control_flow_pc = 333;
            control_flow_repeat = true;
            continue outer;//goto label333
         case 332:
            var r5 = new WyJS.Real(1.2);
            var r6 = new WyJS.Real(2.3);
            var r7 = new WyJS.Tuple([r5, r6], new WyJS.Type.Tuple([new WyJS.Type.Real(), new WyJS.Type.Real()]));
            return r7;//return %7 : (int,int)|(real,real)
         case 333:
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
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$N20FO$F6$p0$RFs1(r5);//invoke %3 = (%5) TupleType_Valid_6:f : function(int) -> TupleType_Valid_6:etup
            var r2 = r3;//assign %2 = %3  : (int,int)|(real,real)
            var r6 = r2.tupleLoad(0);
            var r0 = r6;//assign %0 = %6  : int|real
            var r7 = r2.tupleLoad(1);
            var r1 = r7;//assign %1 = %7  : int|real
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r8, false)){
               control_flow_pc = 334;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(2);
            if(WyJS.equals(r1, r9, true)){
               control_flow_pc = 335;
               control_flow_repeat = true;
               continue outer;
            }
         case 334:
            throw {name: 'Assert Failed', message: 'fail'}
         case 335:
            var r11 = new WyJS.Integer(2);
            var r10 = f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$N20FO$F6$p0$RFs1(r11);//invoke %10 = (%11) TupleType_Valid_6:f : function(int) -> TupleType_Valid_6:etup
            var r0 = r10.tupleLoad(0);
            var r1 = r10.tupleLoad(1);
            var r12 = new WyJS.Real(1.2);
            if(WyJS.equals(r0, r12, false)){
               control_flow_pc = 336;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = new WyJS.Real(2.3);
            if(WyJS.equals(r1, r13, true)){
               control_flow_pc = 337;
               control_flow_repeat = true;
               continue outer;
            }
         case 336:
            throw {name: 'Assert Failed', message: 'fail'}
         case 337:
            return;
      }
   }
}

