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
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : [int]
            var r0 = r3.clone(new WyJS.Type.Int());//assign %0 = %3  : [int]
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Integer(4);
            var r10 = new WyJS.List([r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = r10.clone(new WyJS.Type.Int());//assign %7 = %10  : [int]
            var r1 = r7.clone(new WyJS.Type.Int());//assign %1 = %7  : [int]
            var r12 = r0.append(r1);
            var r11 = r12.clone(new WyJS.Type.Int());//assign %11 = %12  : [int]
            var r2 = r11.clone(new WyJS.Type.Int());//assign %2 = %11  : [int]
            var r13 = new WyJS.Integer(6);
            var r14 = new WyJS.List([r13], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = r0.append(r14);
            var r0 = r15.clone(new WyJS.Type.Int());//assign %0 = %15  : [int]
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(4);
            var r20 = new WyJS.List([r16, r17, r18, r19], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r2, r20, true)){
               control_flow_pc = 1710;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1710:
            var r21 = new WyJS.Integer(1);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Integer(6);
            var r24 = new WyJS.List([r21, r22, r23], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r24, true)){
               control_flow_pc = 1711;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1711:
            return;
      }
   }
}

