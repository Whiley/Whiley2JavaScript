function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([-1,2,3]);
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = [r2, r3, r4];
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1925;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1925:
      }
   }
}

