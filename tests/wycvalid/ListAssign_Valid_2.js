function f(r0){//function([ListAssign_Valid_2:intlist]) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r2 = 0;//const %2 = 0 : int
            var r3 = 0;//const %3 = 0 : int
            if(r2  !=  r3){
               control_flow_pc = 288;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = [r4, r5, r6];
            var r0 = r7;//assign %0 = %7  : [int]
            control_flow_pc = 289;
            control_flow_repeat = true;
            continue outer;
         case 288:
            var r8 = 1;//const %8 = 1 : int
            var r9 = [r8];
            var r10 = 2;//const %10 = 2 : int
            var r11 = 3;//const %11 = 3 : int
            var r12 = [r10, r11];
            var r13 = 5;//const %13 = 5 : int
            var r14 = [r13];
            var r15 = [r9, r12, r14];
            var r0 = r15;//assign %0 = %15  : [[int]]
         case 289:
            var r16 = 1;//const %16 = 1 : int
            var r17 = 0;//const %17 = 0 : int
            var r18 = 1;//const %18 = 1 : int
            r0[r17] = r18;
            var r19 = f(r0);
            var r20 = 1;//const %20 = 1 : int
            var r21 = 2;//const %21 = 2 : int
            var r22 = 3;//const %22 = 3 : int
            var r23 = [r20, r21, r22];
            if(r19  ==  r23){
               control_flow_pc = 290;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 290:
      }
   }
}

test();
