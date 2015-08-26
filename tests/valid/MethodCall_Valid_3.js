function get$2A_Fi$3y(){//method() -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(1);
            return r0;//return %0 : int
            return;
      }
   }
}

function f$3AbFaL1e$FI$J5$o0$P$w5$Z0kF$35$g0$Q$w4$L0FN$k5$d0$O$w4$nV0$r0FQ$B5$m0VC$F6$p0$RFs1E(r0){//method(int) -> MethodCall_Valid_3:wmcr6tup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = get$2A_Fi$3y();//invoke %1 = () MethodCall_Valid_3:get : method() -> int
            var r2 = new WyJS.Record(["x", "y"], [r0, r1], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r2;//return %2 : {int x,int y}
            return;
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
            var r1 = new WyJS.Integer(2);
            var r0 = f$3AbFaL1e$FI$J5$o0$P$w5$Z0kF$35$g0$Q$w4$L0FN$k5$d0$O$w4$nV0$r0FQ$B5$m0VC$F6$p0$RFs1E(r1);//invoke %0 = (%1) MethodCall_Valid_3:f : method(int) -> MethodCall_Valid_3:wmcr6tup
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["x", "y"], [r2, r3], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1113;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1113:
            return;
      }
   }
}

