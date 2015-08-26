function tail$a9bF5D537klcoHN4$N1Vo$ND$c2Vd$cD$32$q$7C$a2$u$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uik2(r0){//function([int]) -> [ListSublist_Valid_3:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.length();//lengthof %2 = %0 : [int]
            var r3 = r0.sublist(r1, r2);
            return r3;//return %3 : [int]
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = tail$a9bF5D537klcoHN4$N1Vo$ND$c2Vd$cD$32$q$7C$a2$u$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uik2(r5);//invoke %0 = (%5) ListSublist_Valid_3:tail : function([int]) -> [ListSublist_Valid_3:nat]
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1431;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1431:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = tail$a9bF5D537klcoHN4$N1Vo$ND$c2Vd$cD$32$q$7C$a2$u$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uik2(r12);//invoke %10 = (%12) ListSublist_Valid_3:tail : function([int]) -> [ListSublist_Valid_3:nat]
            var r13 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r10, r13, true)){
               control_flow_pc = 1432;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1432:
            return;
      }
   }
}

