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
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 10;//const %2 = 10 : int
            return r2;//return %2 : int
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;
         case 0:
            var r3 = 0;//const %3 = 0 : int
            if(r0  !=  r3){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = 0;//const %4 = 0 : int
            return r4;//return %4 : int
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;
         case 2:
            var r5 = 1;//const %5 = 1 : int
            var r6 = -r5;
            return r6;//return %6 : int
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
            var r2 = 0;//const %2 = 0 : int
            if(r0  ==  r2){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r4 = 11;//const %4 = 11 : int
            var r3 = testcontrol(r4);
            var r5 = 10;//const %5 = 10 : int
            if(r3  ==  r5){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r7 = 1;//const %7 = 1 : int
            var r6 = testcontrol(r7);
            var r8 = 1;//const %8 = 1 : int
            var r9 = -r8;
            if(r6  ==  r9){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
      }
   }
}

test();
