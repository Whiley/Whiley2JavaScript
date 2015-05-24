function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  >=  r1){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 1;//const %2 = 1 : int
            var r3 = -r2;
            return r3;//return %3 : int
            control_flow_pc = 6;
            control_flow_repeat = true;
            continue outer;
         case 5:
            var r4 = 10;//const %4 = 10 : int
            if(r0  <=  r4){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = 1;//const %5 = 1 : int
            return r5;//return %5 : int
            control_flow_pc = 6;
            control_flow_repeat = true;
            continue outer;
         case 7:
            var r6 = 0;//const %6 = 0 : int
            return r6;//return %6 : int
         case 6:
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
            var r1 = 1;//const %1 = 1 : int
            var r0 = f(r1);
            var r2 = 1;//const %2 = 1 : int
            var r3 = -r2;
            if(r0  ==  r3){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 8:
            var r5 = 10;//const %5 = 10 : int
            var r4 = f(r5);
            var r6 = 0;//const %6 = 0 : int
            if(r4  ==  r6){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r8 = 11;//const %8 = 11 : int
            var r7 = f(r8);
            var r9 = 1;//const %9 = 1 : int
            if(r7  ==  r9){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 10:
            var r11 = 1212;//const %11 = 1212 : int
            var r10 = f(r11);
            var r12 = 1;//const %12 = 1 : int
            if(r10  ==  r12){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 11:
            var r14 = 1212;//const %14 = 1212 : int
            var r15 = -r14;
            var r13 = f(r15);
            var r16 = 1;//const %16 = 1 : int
            var r17 = -r16;
            if(r13  ==  r17){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 12:
      }
   }
}

test();
