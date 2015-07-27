function test(){//method() -> void
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
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.List('int'));
            r2 = r6.clone();//assign %2 = %6  : [int]
            r0 = r2.clone();//assign %0 = %2  : [int]
            r7 = r0.clone();//assign %7 = %0  : [int]
            r1 = r7.clone();//assign %1 = %7  : [int]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            r1.setValue(r9, r10);//update %1[%9] = %10 : [int] -> [int]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.List([r11, r12, r13], new WyJS.List('int'));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.List([r15, r16, r17], new WyJS.List('int'));
            if(WyJS.equals(r1, r18, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1:
      }
   }
}

