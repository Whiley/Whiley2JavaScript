function testbool(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = true;//const %2 = true : bool
            if(r0  ==  r2){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r1 = true;//const %1 = true : bool
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;
         case 14:
            var r1 = false;//const %1 = false : bool
         case 15:
            return r1;//return %1 : bool
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
            var r1 = true;//const %1 = true : bool
            var r0 = testbool(r1);
            var r2 = false;//const %2 = false : bool
            if(r0  ==  r2){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 16:
            var r4 = false;//const %4 = false : bool
            var r3 = testbool(r4);
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 17:
      }
   }
}

test();
