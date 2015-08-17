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
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            r1 = r5.clone();//assign %1 = %5  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r6 = r0.length();//lengthof %6 = %0 : [int]
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 891;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 891:
      }
   }
}

