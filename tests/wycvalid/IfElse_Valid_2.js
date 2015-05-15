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
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 1;//const %2 = 1 : int
            return r2;//return %2 : int
            control_flow_pc = 9;
            control_flow_repeat = true;
            continue outer;
         case 8:
            var r3 = 10;//const %3 = 10 : int
            if(r0  <=  r3){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = 2;//const %4 = 2 : int
            return r4;//return %4 : int
         case 9:
            var r5 = 0;//const %5 = 0 : int
            return r5;//return %5 : int
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
            if(r0  ==  r2){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 10:
            var r4 = 10;//const %4 = 10 : int
            var r3 = f(r4);
            var r5 = 0;//const %5 = 0 : int
            if(r3  ==  r5){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 11:
            var r7 = 11;//const %7 = 11 : int
            var r6 = f(r7);
            var r8 = 2;//const %8 = 2 : int
            if(r6  ==  r8){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 12:
            var r10 = 1212;//const %10 = 1212 : int
            var r9 = f(r10);
            var r11 = 2;//const %11 = 2 : int
            if(r9  ==  r11){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 13:
            var r13 = 1212;//const %13 = 1212 : int
            var r14 = -r13;
            var r12 = f(r14);
            var r15 = 1;//const %15 = 1 : int
            if(r12  ==  r15){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 14:
      }
   }
}

test();
