function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            return r1;//return %1 : int
      }
   }
}

function f(r0){//function(real) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 2;//const %1 = 2 : int
            return r1;//return %1 : int
      }
   }
}

function f(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 3;//const %1 = 3 : int
            return r1;//return %1 : int
      }
   }
}

function f(r0){//function({int}) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 4;//const %1 = 4 : int
            return r1;//return %1 : int
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
               control_flow_pc = 53;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 53:
            var r4 = 1.234;//const %4 = 1.234 : real
            var r3 = f(r4);
            var r5 = 2;//const %5 = 2 : int
            if(r3  ==  r5){
               control_flow_pc = 54;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 54:
            var r7 = 1;//const %7 = 1 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = 3;//const %9 = 3 : int
            var r10 = [r7, r8, r9];
            var r6 = f(r10);
            var r11 = 3;//const %11 = 3 : int
            if(r6  ==  r11){
               control_flow_pc = 55;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 55:
            var r13 = 1;//const %13 = 1 : int
            var r14 = 2;//const %14 = 2 : int
            var r15 = 3;//const %15 = 3 : int
            var r12 = f(r16);
            var r17 = 4;//const %17 = 4 : int
            if(r12  ==  r17){
               control_flow_pc = 56;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 56:
      }
   }
}

test();
