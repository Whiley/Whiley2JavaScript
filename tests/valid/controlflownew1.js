function testcontrol(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;//const %1 = true : bool
            if(r0  ==  r1){
               control_flow_pc = 30;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 31;
            control_flow_repeat = true;
            continue outer;
         case 30:
            var r2 = true;//const %2 = true : bool
            if(r0  ==  r2){
               control_flow_pc = 32;
               control_flow_repeat = true;
               continue outer;
            }
         case 31:
            var r3 = false;//const %3 = false : bool
            control_flow_pc = 33;
            control_flow_repeat = true;
            continue outer;
         case 32:
            var r3 = true;//const %3 = true : bool
         case 33:
            return r3;//return %3 : bool
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
            var r0 = true;//const %0 = true : bool
            testcontrol(r0);
      }
   }
}

test();
