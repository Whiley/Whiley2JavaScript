function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 1;//const %0 = 1 : int
            var r1 = 2;//const %1 = 2 : int
            if(r0  !=  r1){//ifne %0, %1 goto label2313 : int
               control_flow_pc = 2313;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2313:
      }
   }
}

test();
