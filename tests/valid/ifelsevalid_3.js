function testcontrol(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  <=  r1){
               control_flow_pc = 52;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 10;//const %2 = 10 : int
            return r2;//return %2 : int
            control_flow_pc = 53;
            control_flow_repeat = true;
            continue outer;
         case 52:
            var r3 = 0;//const %3 = 0 : int
            if(r0  !=  r3){
               control_flow_pc = 54;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = 0;//const %4 = 0 : int
            return r4;//return %4 : int
            control_flow_pc = 53;
            control_flow_repeat = true;
            continue outer;
         case 54:
            var r5 = 1;//const %5 = 1 : int
            var r6 = -r5;
            return r6;//return %6 : int
         case 53:
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
            var r2 = 0;//const %2 = 0 : int
            if(r0  ==  r2){
               control_flow_pc = 55;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 55:
            var r4 = 11;//const %4 = 11 : int
            var r3 = testcontrol(r4);
            var r5 = 10;//const %5 = 10 : int
            if(r3  ==  r5){
               control_flow_pc = 56;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 56:
            var r7 = 1;//const %7 = 1 : int
            var r6 = testcontrol(r7);
            var r8 = 1;//const %8 = 1 : int
            var r9 = -r8;
            if(r6  ==  r9){
               control_flow_pc = 57;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 57:
      }
   }
}

test();
