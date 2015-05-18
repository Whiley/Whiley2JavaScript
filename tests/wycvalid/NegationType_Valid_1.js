function f(r0){//function(any) -> !null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;
         case 0:
            var r1 = 1;//const %1 = 1 : int
            return r1;//return %1 : !null
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;
         case 1:
            return r0;//return %0 : !null
         case 2:
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
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r3 = f(r7);
            var r8 = 1;//const %8 = 1 : int
            var r9 = 2;//const %9 = 2 : int
            var r10 = 3;//const %10 = 3 : int
            if(r3  ==  r11){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
      }
   }
}

test();
