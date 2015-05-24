function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 5;//const %0 = 5 : int
            var r1 = 5;//const %1 = 5 : int
            if(r0  ==  r1){
               control_flow_pc = 228;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 228:
      }
   }
}

test();
