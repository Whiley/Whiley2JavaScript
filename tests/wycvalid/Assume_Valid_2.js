function test(){//method() -> void
   var r0 = 1;//const %0 = 1 : int
   var r1 = 1;//const %1 = 1 : int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r1){
               throw {name: 'Assert Failed', message: 'fail'}
            }
         case 96:
      }
   }
}

test();
