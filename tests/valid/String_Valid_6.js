function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([72,101,108,108,111,32]);
            var r1 = new WyJS.List([49,50,50]);
            var r2 = r0.append(r1);
            var r3 = new WyJS.List([72,101,108,108,111,32,49,50,50]);
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 2228;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2228:
      }
   }
}

