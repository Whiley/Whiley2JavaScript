function pred(){//function() -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;//const %0 = false : bool
            return r0;//return %0 : bool
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = pred();
            var r1 = true;//const %1 = true : bool
            if(r0  ==  r1){
               control_flow_pc = 93;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 94;
            control_flow_repeat = true;
            continue outer;
         case 93:
            throw {name: 'Assert Failed', message: 'fail'}
         case 94:
      }
   }
}

test();
