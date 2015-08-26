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
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : [int]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : [int]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(2);
            var r10 = r0.sublist(r8, r9);
            var r7 = r10.clone(new WyJS.Type.Int());//assign %7 = %10  : [int]
            var r1 = r7.clone(new WyJS.Type.Int());//assign %1 = %7  : [int]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.List([r11, r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 1433;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1433:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.List([r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r17, true)){
               control_flow_pc = 1434;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1434:
            return;
      }
   }
}

