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
               control_flow_pc = 46;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = true;//const %2 = true : bool
            return r2;//return %2 : bool
            control_flow_pc = 47;
            control_flow_repeat = true;
            continue outer;
         case 46:
            var r3 = 0;//const %3 = 0 : int
            if(r0  !=  r3){
               control_flow_pc = 48;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = false;//const %4 = false : bool
            return r4;//return %4 : bool
            control_flow_pc = 47;
            control_flow_repeat = true;
            continue outer;
         case 48:
            var r5 = true;//const %5 = true : bool
            return r5;//return %5 : bool
         case 47:
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
               control_flow_pc = 49;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 49:
            var r4 = 11;//const %4 = 11 : int
            var r3 = testcontrol(r4);
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){
               control_flow_pc = 50;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 50:
            var r7 = 9;//const %7 = 9 : int
            var r6 = testcontrol(r7);
            var r8 = true;//const %8 = true : bool
            if(r6  ==  r8){
               control_flow_pc = 51;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 51:
      }
   }
}

test();
