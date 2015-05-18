function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = true;//const %0 = true : bool
            var r1 = true;//const %1 = true : bool
            if(r0  ==  r1){
               control_flow_pc = 223;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 223:
      }
   }
}

test();
