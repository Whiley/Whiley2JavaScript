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
               control_flow_pc = 1874;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(1);
            r0 = r4;//assign %0 = %4  : int
            control_flow_pc = 1875;
            control_flow_repeat = true;
            continue outer;//goto label1875
         case 1874:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.List('int'));
            r0 = r8.clone();//assign %0 = %8  : [int]
         case 1875:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.List('int'));
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 1876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1876:
      }
   }
}

