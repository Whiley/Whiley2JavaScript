function f$Z9bFaL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$FY0$S$35$Y0VB$F6$X0WL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$FY0$S$35$Y0VB$F6$W0(r0){//function(RecordAssign_Valid_4:tac2ta) -> RecordAssign_Valid_4:tac2tb
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("f1");//fieldload %1 = %0 f1 : {int f1,int f2}
            var r2 = new WyJS.Integer(1);
            var r3 = r1.sub(r2);//sub %3 = %1, %2 : int
            var r4 = r0.fieldLoad("f2");//fieldload %4 = %0 f2 : {int f1,int f2}
            var r5 = new WyJS.Record(["f1", "f2"], [r3, r4], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r5;//return %5 : {int f1,int f2}
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
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Record(["f1", "f2"], [r3, r4], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = r5.clone();//assign %2 = %5  : {int f1,int f2}
            var r0 = r2.clone();//assign %0 = %2  : {int f1,int f2}
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Record(["f1", "f2"], [r6, r7], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 708;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 708:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(1);
            r0.setValue("f1", r10);
            var r12 = f$Z9bFaL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$FY0$S$35$Y0VB$F6$X0WL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$FY0$S$35$Y0VB$F6$W0(r0);//invoke %12 = (%0) RecordAssign_Valid_4:f : function(RecordAssign_Valid_4:tac2ta) -> RecordAssign_Valid_4:tac2tb
            var r11 = r12.clone();//assign %11 = %12  : {int f1,int f2}
            var r1 = r11.clone();//assign %1 = %11  : {int f1,int f2}
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Record(["f1", "f2"], [r13, r14], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r15, true)){
               control_flow_pc = 709;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 709:
            return;
      }
   }
}

