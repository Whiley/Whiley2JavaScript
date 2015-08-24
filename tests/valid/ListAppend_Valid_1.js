function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.List([r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.List([r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = r4.append(r7);
            r1 = r8.clone();//assign %1 = %8  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1693;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1693:
      }
   }
}

