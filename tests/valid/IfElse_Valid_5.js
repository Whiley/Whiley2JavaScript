function getFlag$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$JY0VJ$J5$Y0kQ$76$Z0(r0){//function(IfElse_Valid_5:Record) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("flag");//fieldload %3 = %0 flag : {int flag}
            var r4 = new WyJS.Integer(0);
            if(WyJS.lt(r3, r4, false)){
               control_flow_pc = 249;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = new WyJS.Integer(1);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r7 = r0.fieldLoad("flag");//fieldload %7 = %0 flag : {int flag}
            var r8 = new WyJS.Integer(0);
            if(WyJS.lt(r7, r8, true)){
               control_flow_pc = 250;
               control_flow_repeat = true;
               continue outer;
            }
            return r2;//return %2 : int
         case 250:
            control_flow_pc = 251;
            control_flow_repeat = true;
            continue outer;//goto label251
         case 249:
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r2 = r9;//assign %2 = %9  : int
            var r11 = new WyJS.Integer(0);
            return r11;//return %11 : int
         case 251:
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            return r13;//return %13 : int
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
            var r3 = new WyJS.Record(["flag"], [r2], new WyJS.Type.Record(["flag"], [new WyJS.Type.Int()]));
            var r1 = r3.clone();//assign %1 = %3  : {int flag}
            var r0 = r1.clone();//assign %0 = %1  : {int flag}
            var r4 = getFlag$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$JY0VJ$J5$Y0kQ$76$Z0(r0);//invoke %4 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 252;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 252:
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Record(["flag"], [r6], new WyJS.Type.Record(["flag"], [new WyJS.Type.Int()]));
            var r0 = r7.clone();//assign %0 = %7  : {int flag}
            var r8 = getFlag$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$JY0VJ$J5$Y0kQ$76$Z0(r0);//invoke %8 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r9 = new WyJS.Integer(1);
            var r10 = r9.neg();//neg %10 = %9 : int
            if(WyJS.equals(r8, r10, true)){
               control_flow_pc = 253;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 253:
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            var r13 = new WyJS.Record(["flag"], [r12], new WyJS.Type.Record(["flag"], [new WyJS.Type.Int()]));
            var r0 = r13.clone();//assign %0 = %13  : {int flag}
            var r14 = getFlag$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$JY0VJ$J5$Y0kQ$76$Z0(r0);//invoke %14 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r15 = new WyJS.Integer(0);
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 254;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 254:
            return;
      }
   }
}

