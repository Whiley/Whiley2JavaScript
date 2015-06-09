function testcontrol(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = true;//const %2 = true : bool
            if(r0  ==  r2){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            var r1 = true;//const %1 = true : bool
            control_flow_pc = 35;
            control_flow_repeat = true;
            continue outer;
         case 34:
            var r1 = false;//const %1 = false : bool
         case 35:
            var r4 = true;//const %4 = true : bool
            if(r0  ==  r4){
               control_flow_pc = 36;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 37;
            control_flow_repeat = true;
            continue outer;
         case 36:
            var r3 = true;//const %3 = true : bool
            control_flow_pc = 38;
            control_flow_repeat = true;
            continue outer;
         case 37:
            var r3 = false;//const %3 = false : bool
         case 38:
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
