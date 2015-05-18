function testcontrol(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  <=  r1){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = true;//const %2 = true : bool
            return r2;//return %2 : bool
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;
         case 0:
            var r3 = false;//const %3 = false : bool
            return r3;//return %3 : bool
         case 1:
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
            var r0 = testcontrol(r1);
            var r2 = false;//const %2 = false : bool
            if(r0  ==  r2){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r4 = 11;//const %4 = 11 : int
            var r3 = testcontrol(r4);
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
      }
   }
}

test();
