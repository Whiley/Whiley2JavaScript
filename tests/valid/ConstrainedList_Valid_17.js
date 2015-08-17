function f$_9bF5D537kl7oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1VN$sa0$r$7B$cv2(r0){//function([[ConstrainedList_Valid_17:nat]]) -> [ConstrainedList_Valid_17:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.Integer(4);
            var r8 = new WyJS.Integer(5);
            var r9 = new WyJS.Integer(6);
            var r10 = new WyJS.List([r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.List([r6, r10], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r2 = f$_9bF5D537kl7oH$6$51Vr$kC$a2$u$FD$12Vo$kC$92$m$V8$H2Vt$VD$y1$f$7B$N2Vo$VB$y1VN$sa0$r$7B$cv2(r11);//invoke %2 = (%11) ConstrainedList_Valid_17:f : function([[ConstrainedList_Valid_17:nat]]) -> [ConstrainedList_Valid_17:nat]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.List([r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r15, true)){
               control_flow_pc = 163;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 163:
      }
   }
}

