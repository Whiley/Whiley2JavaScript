function f(r0){//method([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = 0;//const %6 = 0 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var control_flow_repeat0 = true;
            var control_flow_pc0 = -1;
            outer0:
            while(control_flow_repeat0){
               while(true){
                  control_flow_repeat0 = false
                  switch(control_flow_pc0){
                     case -1 :
                        var r8 = r1 + r7;//add %8 = %1, %7 : int
                        var r1 = r8;//assign %1 = %8  : int
                        var r9 = 1;//const %9 = 1 : int
                        var r10 = r2 + r9;//add %10 = %2, %9 : int
                        var r2 = r10;//assign %2 = %10  : int
                        var r11 = 0;//const %11 = 0 : int
                        if(r2  >=  r11){
                           control_flow_pc0 = 1;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 1:
                        var r12 = 1;//const %12 = 1 : int
                        var r13 = r2 + r12;//add %13 = %2, %12 : int
                        if(r13  >=  r14){
                           control_flow_pc0 = 2;
                           control_flow_0 = true;
                           continue outer0;
                        }
                  }
               }
            }
         case 2:
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
            var r2 = 2;//const %2 = 2 : int
            var r3 = 3;//const %3 = 3 : int
            var r0 = f(r4);
            var r5 = 3;//const %5 = 3 : int
            if(r0  ==  r5){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r7 = 1;//const %7 = 1 : int
            var r8 = 2;//const %8 = 2 : int
            var r6 = f(r9);
            var r10 = 1;//const %10 = 1 : int
            if(r6  ==  r10){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r12 = 1;//const %12 = 1 : int
            var r13 = 2;//const %13 = 2 : int
            var r14 = 3;//const %14 = 3 : int
            var r15 = 4;//const %15 = 4 : int
            var r16 = 5;//const %16 = 5 : int
            var r17 = 6;//const %17 = 6 : int
            var r11 = f(r18);
            var r19 = 15;//const %19 = 15 : int
            if(r11  ==  r19){
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
