function f$Y9bFXL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$720VR$J5$Y0VBF7(r0){//function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(1);
            r0.fieldLoad("current").setValue("x", r2);
            return r0;//return %0 : {{int x} current}
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
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Record(["x"], [r2], new WyJS.Type.Record(["x"], [new WyJS.Type.Int()]));
            var r4 = new WyJS.Record(["current"], [r3], new WyJS.Type.Record(["current"], [new WyJS.Type.Record(["x"], [new WyJS.Type.Int()])]));
            var r1 = r4.clone();//assign %1 = %4  : {{int x} current}
            var r0 = r1.clone();//assign %0 = %1  : {{int x} current}
            var r5 = f$Y9bFXL1g$VJ$J5$Y0kQ$76$Z0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$720VR$J5$Y0VBF7(r0);//invoke %5 = (%0) RecordAssign_Valid_2:f : function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Record(["x"], [r6], new WyJS.Type.Record(["x"], [new WyJS.Type.Int()]));
            var r8 = new WyJS.Record(["current"], [r7], new WyJS.Type.Record(["current"], [new WyJS.Type.Record(["x"], [new WyJS.Type.Int()])]));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 705;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 705:
            return;
      }
   }
}

