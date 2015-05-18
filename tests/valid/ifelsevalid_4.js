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
            var r2 = 11;//const %2 = 11 : int
            if(r0  <=  r2){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = 12;//const %3 = 12 : int
            if(r0  <=  r3){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = 13;//const %4 = 13 : int
            if(r0  <=  r4){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = 14;//const %5 = 14 : int
            if(r0  <=  r5){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = 15;//const %6 = 15 : int
            if(r0  <=  r6){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = 2000;//const %7 = 2000 : int
            return r7;//return %7 : int
            control_flow_pc = 0;
            control_flow_repeat = true;
            continue outer;
         case 1:
            var r8 = 2000;//const %8 = 2000 : int
            var r9 = -r8;
            return r9;//return %9 : int
         case 0:
            var r10 = 1;//const %10 = 1 : int
            var r11 = -r10;
            return r11;//return %11 : int
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = -r2;
            if(r0  ==  r3){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r5 = 11;//const %5 = 11 : int
            var r4 = testcontrol(r5);
            var r6 = 1;//const %6 = 1 : int
            var r7 = -r6;
            if(r4  ==  r7){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r9 = 16;//const %9 = 16 : int
            var r8 = testcontrol(r9);
            var r10 = 2000;//const %10 = 2000 : int
            if(r8  ==  r10){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r12 = 15;//const %12 = 15 : int
            var r11 = testcontrol(r12);
            var r13 = 2000;//const %13 = 2000 : int
            var r14 = -r13;
            if(r11  ==  r14){
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
