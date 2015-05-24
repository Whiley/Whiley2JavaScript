function abs(r0){//function(int) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 0;//const %1 = 0 : int
            if(r0  <  r1){
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 65;
            control_flow_repeat = true;
            continue outer;
         case 64:
            var r2 = -r0;
            return r2;//return %2 : int
         case 65:
      }
   }
}

function nop(r0){//function(Function_Valid_18:nat) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = abs(r0);
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
            var r3 = 123;//const %3 = 123 : int
            var r4 = -r3;
            var r2 = abs(r4);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r5 = 123;//const %5 = 123 : int
            if(r0  ==  r5){
               control_flow_pc = 67;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 67:
            var r7 = 1;//const %7 = 1 : int
            var r6 = nop(r7);
            var r0 = r6;//assign %0 = %6  : int
            var r8 = 1;//const %8 = 1 : int
            if(r0  ==  r8){
               control_flow_pc = 68;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 68:
      }
   }
}

test();
