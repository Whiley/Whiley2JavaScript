function f(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = true;//const %4 = true : bool
            var r3 = r4;//assign %3 = %4  : bool
            var r2 = r3;//assign %2 = %3  : bool
            if(r0  >=  r1){
               control_flow_pc = 211;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = false;//const %5 = false : bool
            var r2 = r5;//assign %2 = %5  : bool
         case 211:
            var r6 = true;//const %6 = true : bool
            if(r2  ==  r6){
               control_flow_pc = 212;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0 + r1;//add %7 = %0, %1 : int
            return r7;//return %7 : int
            control_flow_pc = 213;
            control_flow_repeat = true;
            continue outer;
         case 212:
            var r8 = 123;//const %8 = 123 : int
            return r8;//return %8 : int
         case 213:
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
            var r2 = 1;//const %2 = 1 : int
            var r0 = f(r1, r2);
            var r3 = 123;//const %3 = 123 : int
            if(r0  ==  r3){
               control_flow_pc = 214;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 214:
            var r5 = 2;//const %5 = 2 : int
            var r6 = 1;//const %6 = 1 : int
            var r4 = f(r5, r6);
            var r7 = 123;//const %7 = 123 : int
            if(r4  ==  r7){
               control_flow_pc = 215;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 215:
            var r9 = 1;//const %9 = 1 : int
            var r10 = 2;//const %10 = 2 : int
            var r8 = f(r9, r10);
            var r11 = 3;//const %11 = 3 : int
            if(r8  ==  r11){
               control_flow_pc = 216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 216:
      }
   }
}

test();
