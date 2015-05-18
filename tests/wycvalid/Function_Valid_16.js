function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            return r2;//return %2 : int
      }
   }
}

function g(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r4 = 2;//const %4 = 2 : int
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            var r6 = 1;//const %6 = 1 : int
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            if(r0  >=  r1){
               control_flow_pc = 55;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = f(r1);
            var r0 = r7;//assign %0 = %7  : int
         case 55:
            var r9 = g(r0, r1);
            var r8 = r9;//assign %8 = %9  : int
            var r2 = r8;//assign %2 = %8  : int
            var r10 = 3;//const %10 = 3 : int
            if(r2  ==  r10){
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
