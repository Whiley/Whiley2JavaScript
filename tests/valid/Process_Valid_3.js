function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Real(123.456);
            var r1 = new WyJS.Real(123.456);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1653;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1653:
      }
   }
}

