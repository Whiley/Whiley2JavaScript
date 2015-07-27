function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.List([r2]);
            var r1 = r3.clone();//assign %1 = %3  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            r0.setValue(r5, r6);//update %0[%5] = %6 : [int] -> [int]
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.List([r7]);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 1245;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1245:
      }
   }
}

