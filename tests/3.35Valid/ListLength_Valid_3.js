function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.List('int'));
            r1 = r5.clone();//assign %1 = %5  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r6 = new WyJS.Integer(0);
            var r7 = r0.getValue(r6);
            var r8 = r0.length;//lengthof %8 = %0 : [int]
            if(WyJS.lt(r7, r8, false)){
               control_flow_pc = 874;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 874:
            var r9 = new WyJS.Integer(1);
            var r10 = r0.getValue(r9);
            var r11 = r0.length;//lengthof %11 = %0 : [int]
            if(WyJS.lt(r10, r11, false)){
               control_flow_pc = 875;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 875:
            var r12 = new WyJS.Integer(2);
            var r13 = r0.getValue(r12);
            var r14 = r0.length;//lengthof %14 = %0 : [int]
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 876:
      }
   }
}

