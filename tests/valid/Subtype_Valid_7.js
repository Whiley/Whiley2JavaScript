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
            r1 = r4.clone();//assign %1 = %4  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(2);
            r0.setValue(r6, r7);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.List([r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 1253;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1253:
      }
   }
}

