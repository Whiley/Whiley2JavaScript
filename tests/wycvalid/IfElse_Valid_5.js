function getFlag(r0){//function(IfElse_Valid_5:Record) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            if(r3  <  r4){
               control_flow_pc = 33;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = 1;//const %6 = 1 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r8 = 0;//const %8 = 0 : int
            if(r7  <=  r8){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            return r2;//return %2 : int
         case 34:
            control_flow_pc = 35;
            control_flow_repeat = true;
            continue outer;
         case 33:
            var r10 = 0;//const %10 = 0 : int
            var r9 = r10;//assign %9 = %10  : int
            var r2 = r9;//assign %2 = %9  : int
            var r11 = 0;//const %11 = 0 : int
            return r11;//return %11 : int
         case 35:
            var r12 = 1;//const %12 = 1 : int
            var r13 = -r12;
            return r13;//return %13 : int
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
            var r2 = 1;//const %2 = 1 : int
            var r1 = r3;//assign %1 = %3  : {int flag}
            var r0 = r1;//assign %0 = %1  : {int flag}
            var r4 = getFlag(r0);
            var r5 = 1;//const %5 = 1 : int
            if(r4  ==  r5){
               control_flow_pc = 36;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 36:
            var r6 = 0;//const %6 = 0 : int
            var r0 = r7;//assign %0 = %7  : {int flag}
            var r8 = getFlag(r0);
            var r9 = 1;//const %9 = 1 : int
            var r10 = -r9;
            if(r8  ==  r10){
               control_flow_pc = 37;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 37:
            var r11 = 1;//const %11 = 1 : int
            var r12 = -r11;
            var r0 = r13;//assign %0 = %13  : {int flag}
            var r14 = getFlag(r0);
            var r15 = 0;//const %15 = 0 : int
            if(r14  ==  r15){
               control_flow_pc = 38;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 38:
      }
   }
}

test();
