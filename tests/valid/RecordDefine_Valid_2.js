function f$Y9bFXL1g$VJ$J5$Y0kQ$76$Z0$G$J5$a0FP$s5$_0kM$N4$W0$Q$Z5$Z0kM$7I0$J$w5$d0VQ$F631(r0){//function(RecordDefine_Valid_2:Point) -> RecordDefine_Valid_2:Point
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int x,int y}
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Record(["x", "y"], [r3, r4], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = f$Y9bFXL1g$VJ$J5$Y0kQ$76$Z0$G$J5$a0FP$s5$_0kM$N4$W0$Q$Z5$Z0kM$7I0$J$w5$d0VQ$F631(r5);//invoke %2 = (%5) RecordDefine_Valid_2:f : function(RecordDefine_Valid_2:Point) -> RecordDefine_Valid_2:Point
            var r1 = r2.clone();//assign %1 = %2  : {int x,int y}
            var r0 = r1.clone();//assign %0 = %1  : {int x,int y}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 202;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 202:
            return;
      }
   }
}

