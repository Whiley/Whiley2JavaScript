function f$Z9bFaL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$RI0VN$Z6$o0FO$B63P8k1$H0FO$B5$j0VR$F5$00kR$B6$d0kO$s5$U0VK$35$g0FP$F5$U0kC1$d0$D(r0){//function(RecordAssign_Valid_7:i8) -> RecordAssign_Valid_7:bytes
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Record(["b1", "b2"], [r0, r1], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r2;//return %2 : {int b1,int b2}
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
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            var r5 = f$Z9bFaL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$RI0VN$Z6$o0FO$B63P8k1$H0FO$B5$j0VR$F5$00kR$B6$d0kO$s5$U0VK$35$g0FP$F5$U0kC1$d0$D(r0);//invoke %5 = (%0) RecordAssign_Valid_7:f : function(RecordAssign_Valid_7:i8) -> RecordAssign_Valid_7:bytes
            var r4 = r5.clone();//assign %4 = %5  : {int b1,int b2}
            var r1 = r4.clone();//assign %1 = %4  : {int b1,int b2}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Record(["b1", "b2"], [r6, r7], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r8, true)){
               control_flow_pc = 714;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 714:
            var r9 = new WyJS.Record(["b1", "b2"], [r0, r0], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r9.clone();//assign %1 = %9  : {int b1,int b2}
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Record(["b1", "b2"], [r10, r11], new WyJS.Type.Record(["b1", "b2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r12, true)){
               control_flow_pc = 715;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 715:
            return;
      }
   }
}

