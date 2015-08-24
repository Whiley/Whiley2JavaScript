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
            r2 = r6.clone();//assign %2 = %6  : [int]
            r0 = r2.clone();//assign %0 = %2  : [int]
            var r8 = new WyJS.Real(4.23);
            var r9 = new WyJS.Real(5.5);
            var r10 = new WyJS.List([r8, r9], new WyJS.Type.List(new WyJS.Type.Real()));
            r7 = r10.clone();//assign %7 = %10  : [real]
            r1 = r7.clone();//assign %1 = %7  : [real]
            var r11 = WyJS.Cast(r0, new WyJS.Type.List(new WyJS.Type.Real()));
            var r12 = r1.append(r11);
            r1 = r12.clone();//assign %1 = %12  : [real]
            var r13 = new WyJS.Real(4.23);
            var r14 = new WyJS.Real(5.5);
            var r15 = new WyJS.Real(1.0);
            var r16 = new WyJS.Real(2.0);
            var r17 = new WyJS.Real(3.0);
            var r18 = new WyJS.List([r13, r14, r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Real()));
            if(WyJS.equals(r1, r18, true)){
               control_flow_pc = 1712;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1712:
      }
   }
}

