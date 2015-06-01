function f(){//function() -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 1;//const %0 = 1 : int
            var r1 = 2;//const %1 = 2 : int
            var r2 = [r0, r1];
            return r2;//return %2 : [int]
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
            var r3 = f();
            var r2 = r3;//assign %2 = %3  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r5 = f();
            var r4 = r5;//assign %4 = %5  : [int]
            var r1 = r4;//assign %1 = %4  : [int]
            var r6 = 0;//const %6 = 0 : int
            var r7 = 0;//const %7 = 0 : int
            var r8 = 0;//const %8 = 0 : int
            r1[r7] = r8;
            var r9 = 0;//const %9 = 0 : int
            var r10 = r0[r9];
            var r11 = 1;//const %11 = 1 : int
            if(r10  ==  r11){
               control_flow_pc = 320;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 320:
            var r12 = 1;//const %12 = 1 : int
            var r13 = r0[r12];
            var r14 = 2;//const %14 = 2 : int
            if(r13  ==  r14){
               control_flow_pc = 321;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 321:
            var r15 = 0;//const %15 = 0 : int
            var r16 = r1[r15];
            var r17 = 0;//const %17 = 0 : int
            if(r16  ==  r17){
               control_flow_pc = 322;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 322:
            var r18 = 1;//const %18 = 1 : int
            var r19 = r1[r18];
            var r20 = 2;//const %20 = 2 : int
            if(r19  ==  r20){
               control_flow_pc = 323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 323:
      }
   }
}

test();
