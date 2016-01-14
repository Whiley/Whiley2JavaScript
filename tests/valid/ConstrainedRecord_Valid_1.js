function f$_9bF5D537oH76$51Vr$kC$a2$u$FD$12Vo$kC$92$m$F9$92Vl$sC$Z2$m$sA$g1Vk$VC$H2$m$sA$XW$c9$R1VZ$VeAw2(r0){//function(ConstrainedRecord_Valid_1:UNIT) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op}
            var r2 = new WyJS.Array([r1], new WyJS.Type.Array(new WyJS.Type.Int()));
            return r2;//return %2 : int[]
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["op"], [r3], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            var r2 = f$_9bF5D537oH76$51Vr$kC$a2$u$FD$12Vo$kC$92$m$F9$92Vl$sC$Z2$m$sA$g1Vk$VC$H2$m$sA$XW$c9$R1VZ$VeAw2(r4);//invoke %2 = (%4) ConstrainedRecord_Valid_1:f : function(ConstrainedRecord_Valid_1:UNIT) -> int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Array([r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 818;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 818:
            return;
      }
   }
}

