function f$Z9bFaL1T$$G$J5$a0FP$s5$_0kM$N4$W0$Q$Z5$Z0kM$F20kN$w5$Z0FOFc_V6$F3$_0VO$Z5$i0FO$w4$L0FN$k5$d0$O$w4$oN$B5$j0$O$J5$E0$R(r0){//function(Define_Valid_4:codeOp) -> Define_Valid_4:code
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = new WyJS.Record(["op", "payload"], [r0, r3], new WyJS.Type.Record(["op", "payload"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Void())]));
            var r2 = r4;//assign %2 = %4  : {int op,[void] payload}
            var r1 = r2;//assign %1 = %2  : {int op,[int] payload}
            return r1;//return %1 : {int op,[int] payload}
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r0 = f$Z9bFaL1T$$G$J5$a0FP$s5$_0kM$N4$W0$Q$Z5$Z0kM$F20kN$w5$Z0FOFc_V6$F3$_0VO$Z5$i0FO$w4$L0FN$k5$d0$O$w4$oN$B5$j0$O$J5$E0$R(r1);//invoke %0 = (%1) Define_Valid_4:f : function(Define_Valid_4:codeOp) -> Define_Valid_4:code
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = new WyJS.Record(["op", "payload"], [r2, r3], new WyJS.Type.Record(["op", "payload"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Void())]));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 541;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 541:
      }
   }
}
