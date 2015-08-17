function f$_9dFad_k9$k3$d0kR$F6$00$R$$6$_0VQ$F5$U0VK$35$g0FP$F5$U0FB$Fn$VQ$35$o00D5ZAB(r0, r1){//function([int],[int]) -> ListAppend_Valid_14:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.append(r1);
            var r3 = r2.length();//lengthof %3 = %2 : [int]
            return r3;//return %3 : int
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
            var r14 = f$_9dFad_k9$k3$d0kR$F6$00$R$$6$_0VQ$F5$U0VK$35$g0FP$F5$U0FB$Fn$VQ$35$o00D5ZAB(r0, r1);//invoke %14 = (%0, %1) ListAppend_Valid_14:f : function([int],[int]) -> ListAppend_Valid_14:nat
            var r13 = r14;//assign %13 = %14  : int
            var r2 = r13;//assign %2 = %13  : int
            var r15 = new WyJS.Integer(6);
            if(WyJS.equals(r2, r15, true)){
               control_flow_pc = 1953;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1953:
      }
   }
}

