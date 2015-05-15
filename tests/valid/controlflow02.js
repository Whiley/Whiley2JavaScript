function testbool(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  >  r1){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = false;//const %2 = false : bool
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;
         case 18:
            var r2 = true;//const %2 = true : bool
         case 19:
            return r2;//return %2 : bool
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
            var r1 = 0;//const %1 = 0 : int
            var r0 = testbool(r1);
            var r2 = false;//const %2 = false : bool
            if(r0 != r2){//assume 
               throw {name: 'Assert Failed', message: 'r0 !eq r2'}
            }
            var r4 = 11;//const %4 = 11 : int
            var r3 = testbool(r4);
            var r5 = true;//const %5 = true : bool
            if(r3 != r5){//assume 
               throw {name: 'Assert Failed', message: 'r3 !eq r5'}
            }
      }
   }
}

test();
