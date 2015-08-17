function f$Z9dFXVYl$1h3J0$a$7C$a2$u$77$V2$s$cB$R2$m$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r0, r1){//function([ListAppend_Valid_3:nat],[ListAppend_Valid_3:nat]) -> [ListAppend_Valid_3:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.append(r1);
            return r2;//return %2 : [int]
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            r3 = r7.clone();//assign %3 = %7  : [int]
            r0 = r3.clone();//assign %0 = %3  : [int]
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(6);
            var r11 = new WyJS.Integer(7);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            r8 = r12.clone();//assign %8 = %12  : [int]
            r1 = r8.clone();//assign %1 = %8  : [int]
            var r14 = f$Z9dFXVYl$1h3J0$a$7C$a2$u$77$V2$s$cB$R2$m$sA$g1Vk$VC$H2$m$sA$aO$kC$12$uD(r0, r1);//invoke %14 = (%0, %1) ListAppend_Valid_3:f : function([ListAppend_Valid_3:nat],[ListAppend_Valid_3:nat]) -> [ListAppend_Valid_3:nat]
            r13 = r14.clone();//assign %13 = %14  : [int]
            r2 = r13.clone();//assign %2 = %13  : [int]
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.Integer(6);
            var r20 = new WyJS.Integer(7);
            var r21 = new WyJS.List([r15, r16, r17, r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r2, r21, true)){
               control_flow_pc = 1686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1686:
      }
   }
}

