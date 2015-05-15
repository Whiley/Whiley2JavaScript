function testbool(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            if(r0  ==  r1){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = false;//const %2 = false : bool
            control_flow_pc = 23;
            control_flow_repeat = true;
            continue outer;
         case 22:
            var r2 = true;//const %2 = true : bool
         case 23:
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
            if(r0  ==  r2){
               control_flow_pc = 24;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 24:
            var r4 = 1;//const %4 = 1 : int
            var r3 = testbool(r4);
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){
               control_flow_pc = 25;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 25:
      }
   }
}

test();
