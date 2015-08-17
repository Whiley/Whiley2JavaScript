function f$Z9fFa8P8c1$B0FP$B6$o0FF$$6$k0FO$s5$Z0kM$N4$W0$Q$Z5$Z0kM$Jn$VQ$35$o00D5Wz(r0, r1, r2){//function([ListAppend_Valid_5:nat],[ListAppend_Valid_5:nat],ListAppend_Valid_5:nat) -> ListAppend_Valid_5:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.append(r1);
            r0 = r3.clone();//assign %0 = %3  : [int]
            var r4 = r0.getValue(r2);
            return r4;//return %4 : int
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
            var r15 = new WyJS.Integer(1);
            var r14 = f$Z9fFa8P8c1$B0FP$B6$o0FF$$6$k0FO$s5$Z0kM$N4$W0$Q$Z5$Z0kM$Jn$VQ$35$o00D5Wz(r0, r1, r15);//invoke %14 = (%0, %1, %15) ListAppend_Valid_5:f : function([ListAppend_Valid_5:nat],[ListAppend_Valid_5:nat],ListAppend_Valid_5:nat) -> ListAppend_Valid_5:nat
            var r13 = r14;//assign %13 = %14  : int
            var r2 = r13;//assign %2 = %13  : int
            var r16 = new WyJS.Integer(2);
            if(WyJS.equals(r2, r16, true)){
               control_flow_pc = 1691;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1691:
            var r18 = new WyJS.Integer(4);
            var r17 = f$Z9fFa8P8c1$B0FP$B6$o0FF$$6$k0FO$s5$Z0kM$N4$W0$Q$Z5$Z0kM$Jn$VQ$35$o00D5Wz(r0, r1, r18);//invoke %17 = (%0, %1, %18) ListAppend_Valid_5:f : function([ListAppend_Valid_5:nat],[ListAppend_Valid_5:nat],ListAppend_Valid_5:nat) -> ListAppend_Valid_5:nat
            var r2 = r17;//assign %2 = %17  : int
            var r19 = new WyJS.Integer(6);
            if(WyJS.equals(r2, r19, true)){
               control_flow_pc = 1692;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1692:
      }
   }
}

