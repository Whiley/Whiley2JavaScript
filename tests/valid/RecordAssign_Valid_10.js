function f$Z9bFaL1h$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$32$kJ$75$t0$S$J5$n0WA$(r0){//function(int) -> RecordAssign_Valid_10:bytes
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = r0.add(r3);//add %4 = %0, %3 : int
            var r5 = new WyJS.Record(["b1", "b2"], [r0, r4], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = r5.clone();//assign %2 = %5  : {int b1,int b2}
            var r1 = r2.clone();//assign %1 = %2  : {int b1,int b2}
            return r1;//return %1 : {int b1,int b2}
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
            var r0 = f$Z9bFaL1h$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$32$kJ$75$t0$S$J5$n0WA$(r1);//invoke %0 = (%1) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Record(["b1", "b2"], [r2, r3], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1036;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1036:
            var r6 = new WyJS.Integer(2);
            var r5 = f$Z9bFaL1h$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$32$kJ$75$t0$S$J5$n0WA$(r6);//invoke %5 = (%6) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Record(["b1", "b2"], [r7, r8], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r5, r9, true)){
               control_flow_pc = 1037;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1037:
            var r11 = new WyJS.Integer(9);
            var r10 = f$Z9bFaL1h$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$32$kJ$75$t0$S$J5$n0WA$(r11);//invoke %10 = (%11) RecordAssign_Valid_10:f : function(int) -> RecordAssign_Valid_10:bytes
            var r12 = new WyJS.Integer(9);
            var r13 = new WyJS.Integer(10);
            var r14 = new WyJS.Record(["b1", "b2"], [r12, r13], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r10, r14, true)){
               control_flow_pc = 1038;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1038:
            return;
      }
   }
}

