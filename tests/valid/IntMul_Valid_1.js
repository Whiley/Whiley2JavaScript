function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = r2.mul(r3);//mul %4 = %2, %3 : int
            var r5 = new WyJS.Integer(1);
            var r6 = r4.add(r5);//add %6 = %4, %5 : int
            var r1 = r6;//assign %1 = %6  : int
            var r0 = r1;//assign %0 = %1  : int
            var r7 = new WyJS.Integer(7);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1133;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1133:
            return;
      }
   }
}

