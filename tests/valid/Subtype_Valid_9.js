function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = [r2];
            var r1 = r3;//assign %1 = %3  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(1);
            var r5 = [r4];
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1265;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1265:
      }
   }
}

