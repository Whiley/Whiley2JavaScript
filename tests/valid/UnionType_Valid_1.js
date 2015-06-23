function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r2, r3, false)){
               control_flow_pc = 1927;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(1);
            var r0 = r4;//assign %0 = %4  : int
            control_flow_pc = 1928;
            control_flow_repeat = true;
            continue outer;//goto label1928
         case 1927:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = [r5, r6, r7];
            var r0 = r8;//assign %0 = %8  : [int]
         case 1928:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = [r9, r10, r11];
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 1929;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1929:
      }
   }
}

