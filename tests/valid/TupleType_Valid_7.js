function f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$R20FO$F6$p0$RFs1(r0){//function(int) -> TupleType_Valid_7:etup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 338;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Tuple([r2, r3], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r4;//return %4 : (int,int)|(real,real)
            control_flow_pc = 339;
            control_flow_repeat = true;
            continue outer;//goto label339
         case 338:
            var r5 = new WyJS.Real(1.2);
            var r6 = new WyJS.Real(2.3);
            var r7 = new WyJS.Tuple([r5, r6], new WyJS.Type.Tuple([new WyJS.Type.Real(), new WyJS.Type.Real()]));
            return r7;//return %7 : (int,int)|(real,real)
         case 339:
            return;
      }
   }
}

function g$a9bF5C930WAV1O9B12(r0){//function(int) -> (int|real,int|real)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = f$Z9bFaL1d$$K$J6$k0$Q$J5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$R20FO$F6$p0$RFs1(r0);//invoke %1 = (%0) TupleType_Valid_7:f : function(int) -> TupleType_Valid_7:etup
            return r1;//return %1 : (int|real,int|real)
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
            var r3 = g$a9bF5C930WAV1O9B12(r5);//invoke %3 = (%5) TupleType_Valid_7:g : function(int) -> (int|real,int|real)
            var r2 = r3;//assign %2 = %3  : (int|real,int|real)
            var r6 = r2.tupleLoad(0);
            var r0 = r6;//assign %0 = %6  : int|real
            var r7 = r2.tupleLoad(1);
            var r1 = r7;//assign %1 = %7  : int|real
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r8, false)){
               control_flow_pc = 340;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(2);
            if(WyJS.equals(r1, r9, true)){
               control_flow_pc = 341;
               control_flow_repeat = true;
               continue outer;
            }
         case 340:
            throw {name: 'Assert Failed', message: 'fail'}
         case 341:
            var r11 = new WyJS.Integer(2);
            var r10 = g$a9bF5C930WAV1O9B12(r11);//invoke %10 = (%11) TupleType_Valid_7:g : function(int) -> (int|real,int|real)
            var r0 = r10.tupleLoad(0);
            var r1 = r10.tupleLoad(1);
            var r12 = new WyJS.Real(1.2);
            if(WyJS.equals(r0, r12, false)){
               control_flow_pc = 342;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = new WyJS.Real(2.3);
            if(WyJS.equals(r1, r13, true)){
               control_flow_pc = 343;
               control_flow_repeat = true;
               continue outer;
            }
         case 342:
            throw {name: 'Assert Failed', message: 'fail'}
         case 343:
            return;
      }
   }
}

