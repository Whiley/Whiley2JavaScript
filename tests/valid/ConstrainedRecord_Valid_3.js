function f$_9bF5D537oH76$51Vr$kC$a2$u$FD$12Vo$kC$92$m$F9$92Vl$sC$Z2$m$sA$g1Vk$VC$H2$m$sA$aW$FB$c2Vu$$iAw2(r0){//function(ConstrainedRecord_Valid_3:btup) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int index,int op}
            var r2 = r0.fieldLoad("index");//fieldload %2 = %0 index : {int index,int op}
            var r3 = new WyJS.List([r1, r2], new WyJS.Type.List(new WyJS.Type.Int()));
            return r3;//return %3 : int[]
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
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["index", "op"], [r1, r2], new WyJS.Type.Record(["index", "op"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = f$_9bF5D537oH76$51Vr$kC$a2$u$FD$12Vo$kC$92$m$F9$92Vl$sC$Z2$m$sA$g1Vk$VC$H2$m$sA$aW$FB$c2Vu$$iAw2(r3);//invoke %0 = (%3) ConstrainedRecord_Valid_3:f : function(ConstrainedRecord_Valid_3:btup) -> int[]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 815;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 815:
            return;
      }
   }
}

