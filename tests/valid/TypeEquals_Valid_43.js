function getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$kB3$d0FQ$B6$b0(r0){//function(TypeEquals_Valid_43:imsg) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 1072;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1073;
            control_flow_repeat = true;
            continue outer;//goto label1073
         case 1072:
            var r1 = r0.fieldLoad("msg");//fieldload %1 = %0 msg : {[int] msg}
            return r1;//return %1 : any
            control_flow_pc = 1074;
            control_flow_repeat = true;
            continue outer;//goto label1074
         case 1073:
            return r0;//return %0 : any
         case 1074:
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
            var r1 = new WyJS.List([72,69,76,76,79,32,87,79,82,76,68]);
            var r2 = new WyJS.Record(["msg"], [r1], new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r0 = getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$kB3$d0FQ$B6$b0(r2);//invoke %0 = (%2) TypeEquals_Valid_43:getMessage : function(TypeEquals_Valid_43:imsg) -> any
            var r3 = new WyJS.List([72,69,76,76,79,32,87,79,82,76,68]);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1075;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1075:
            var r5 = new WyJS.Integer(1);
            var r4 = getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$kB3$d0FQ$B6$b0(r5);//invoke %4 = (%5) TypeEquals_Valid_43:getMessage : function(TypeEquals_Valid_43:imsg) -> any
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 1076;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1076:
      }
   }
}
